import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NaviagateCard from '../components/NaviagateCard'
import RideOptionCard from '../components/RideOptionCard'


const MapScreen = () => {
  const Stack=createNativeStackNavigator();
  return (
    <View>
      <View style={tw `h-1/2`}>
        <Map />
      </View>

      <View style={tw `h-1/2`}>
      <Stack.Navigator>
        <Stack.Screen
        name='NaviagateCard'
        component={NaviagateCard}
        options={{headerShown:false}}
        />
       
        <Stack.Screen 
        name='RideOptionCard'
        component={RideOptionCard}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
      </View>

    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})