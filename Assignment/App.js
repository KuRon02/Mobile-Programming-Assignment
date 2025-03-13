import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Locations } from './components/Location.js';
import Styles from './styles/Style.js';
import { addLocation, useFireLocations } from './firebase/FirestoreController.js';

const Stack = createNativeStackNavigator();

export default function App() {

  const locations = useFireLocations();

  console.log(locations);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Locations'} component={Locations}></Stack.Screen>
        <Stack.Screen name={'Maps'} component={Maps}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Maps() {
  return (
    <Text>Maps here</Text>
  )
}
