import { StyleSheet, Text, View, Button, Switch, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Locations } from './components/Location.js';
import { AddLocation } from  './components/AddLocation.js';
import { Maps } from './components/Maps.js';
import { addPlace, useFireLocations } from './firebase/FirestoreController.js';

const Stack = createNativeStackNavigator();

export default function App() {

  const locations = useFireLocations();

  console.log(locations);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Locations'} component={Locations}></Stack.Screen>
        <Stack.Screen name={'Maps'} component={Maps}></Stack.Screen>
        <Stack.Screen name={'AddLocation'} component={AddLocation}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
