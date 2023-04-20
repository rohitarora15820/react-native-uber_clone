import { SafeAreaView, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_API_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlices';
import { useNavigation } from '@react-navigation/native';

import { Icon } from 'react-native-elements';

const NaviagateCard = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();


  return (
    <SafeAreaView style={tw`bg-white flex-1`}>

      <Text style={tw`text-center py-8 text-xl`}
      >Good Morning, Rohit Arora</Text>
      <View style={tw`border-t border-gray-200 flex-shrink `}>
        <View>
       
        </View>
        <View style={tw`flex-row justify-evenly bg-white py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
        onPress={()=>{navigation.navigate('RideOptionCard')}}
        style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
          <Icon name="car" type='font-awesome' color="white" size={16}/>
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon name="fast-food-outline" type='ionicon' color="black" size={16}/>
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  )
}

export default NaviagateCard

const toInputBox = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 10,
    flex: 0
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})