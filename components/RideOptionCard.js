import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeDistance } from '../slices/navSlices'

const RideOptionCard = () => {
  const navigation=useNavigation();
  const [selected,setSelected]=useState(null);
  const travelTimeDistance=useSelector(selectTravelTimeDistance)
  const data=[
    {
      id:"Uber-X-123",
      title:"Uber-X",
      multiplier:1,
      image:"https://links.papareact.com/3pn"
    },{
      id:"Uber-XL-456",
      title:"Uber-XL",
      multiplier:1.2,
      image:"https://links.papareact.com/5w8"


    },{
      id:"Uber-LUX-789",
      title:"Uber-LUX",
      multiplier:1.75,
      image:"https://links.papareact.com/7pf"

    }
  ];
  return (
    <SafeAreaView style={tw`flex-grow bg-white`} >
      <View>
      <TouchableOpacity 
        onPress={()=>{navigation.goBack()}}
        style={tw` bg-white absolute top-3 left-5 p-3 z-50 rounded-full`}>
        <Icon name='chevron-left' type='fontawesome'/>
        </TouchableOpacity>
       
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride-{travelTimeDistance?.distance.text}</Text>
      </View>

      <FlatList
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={({item:{id,image,multiplier,title},item})=>(
        <TouchableOpacity 
        onPress={()=>setSelected(item)}
        style={tw`flex-row items-center justify-between px-10 ${id ===selected?.id && "bg-gray-200"} `}>
          <Image
          style={{width: 100, height: 100, resizeMode:"contain"}}
          source={{uri:image}}
          />
          <View>
            <Text style={tw`text-xl font-semibold`}>{title}</Text>
            <Text>{travelTimeDistance?.distance.text}-Travel Time</Text>
          </View>
          <Text style={tw `text-xl`}>

            {Intl.NumberFormat("en",
            {
              style:"currency",
              currency:"INR"
            }
            ).format(
              (travelTimeDistance?.distance.value * 1.25 * multiplier)/100
            )
            }
          </Text>


        </TouchableOpacity>
      )}
      />

      <View style={tw`mt-auto border-t border-red-200`}>
        <TouchableOpacity 
        disabled={!selected}
        style={tw`bg-black py-3 m-2 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-xl text-white`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
      
      </SafeAreaView>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({})