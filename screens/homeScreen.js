import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_API_KEY} from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlices";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
    const dispatch=useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-10`}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />
                <GooglePlacesAutocomplete 
                minLength={2}
                enablePoweredByContainer={false}
                styles={{
                    container:{flex:0},

                    textInput:{fontSize:18}
                }}
                onPress={(data,details=null)=>{
                   
                   dispatch(setOrigin({
                    location:details.geometry.location,
                    description:data.description
                   }))
                
                

                  
                }}
                fetchDetails={true}
                returnKeyType={"search"}

                query={{
                    key:GOOGLE_MAP_API_KEY,
                    language:"en",
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                placeholder="Where To?"

                />
               
                  
                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue",
    },
});
