import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setTravelTimeDistance } from '../slices/navSlices'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAP_API_KEY } from "@env";

const Map = () => {
  const [coordinates] = useState([

    {

      latitude: 28.4023444,

      longitude: 77.1542593,

    },

    {
      

      latitude: 28.4099322,

      longitude:77.3074832,

    },

  ]);
  const origin = useSelector(selectOrigin);
  const destination=useSelector(selectDestination);
  const dispatch = useDispatch();
 


  useEffect(() => {
    
    const getTravelTime = async () => {

      var responseClone; // 1
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json
?destinations=Faridabad,Haryana
&origins=${origin.description}
&units=imperial
&key=${GOOGLE_MAP_API_KEY}`)
        .then(function (response) {
          responseClone = response.clone(); // 2
          return response.json();
        })
        .then(function (data) {
          dispatch(setTravelTimeDistance(
            data.rows[0].elements[0]
          ))
          // Do something with data
        }, function (rejectionReason) { // 3
          console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
          responseClone.text() // 5
            .then(function (bodyText) {
              console.log('Received the following instead of valid JSON:', bodyText); // 6
            });
        });




    };
    getTravelTime();

  }, [coordinates[0], coordinates[1], GOOGLE_MAP_API_KEY])



  return (


    <MapView
    

      style={tw`flex-1`}
      mapType='mutedStandard'

      initialRegion={{

        latitude: origin.location.lat,

        longitude: origin.location.lng ,

        latitudeDelta: 0.0622,

        longitudeDelta: 0.0121,

      }}>



{origin  &&(
      <MapViewDirections

        origin={origin.description}

        destination={coordinates[1]}

        apikey={GOOGLE_MAP_API_KEY}

        strokeWidth={4}

        strokeColor="#111111"

      />
)
}     
  {
        origin?.location && (
          <Marker 
          coordinate={{
            latitude: origin.location.lat,
        longitude: origin.location.lng,
      
          }}
          title='Destination'
          description={origin.description}
          identifier='destination'
          />
        )
      }
       {/* {
        destination?.location && (
          <Marker 
          coordinate={{
            latitude: destination.location.lat,
        longitude: destination.location.lng,
      
          }}
          title='Destination'
          description={destination.description}
          identifier='destination'
          />
        )
      } */}
      {/* <Marker coordinate={coordinates[0]} /> */}
      <Marker coordinate={coordinates[1]} 
       title='Origin'
       description="Faridabad,Haryana"
       identifier='origin'
      />




    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})


