import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,KeyboardAvoidingView,Platform} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/homeScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/mapScreen';
import EatScreen from './screens/EatScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>

        <SafeAreaProvider>
          <KeyboardAvoidingView 
          behavior={Platform.OS=="ios"? "padding":"height"}
          style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='MapScreen' component={MapScreen} options={{headerShown:false}}/>
            <Stack.Screen name='EatScreen' component={EatScreen} options={{headerShown:false}}/>
          </Stack.Navigator>
          </KeyboardAvoidingView>

        </SafeAreaProvider>
      </NavigationContainer>


    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
