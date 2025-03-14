import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Locations } from './components/Location.js';
import { AddLocation } from  './components/AddLocation.js';
import { Maps } from './components/Maps.js';
import { useFireLocations } from './firebase/FirestoreController.js';

//Initialize navigation
const Stack = createNativeStackNavigator();

export default function App() {

  //Load database information
  const locations = useFireLocations();

  //List all possible screens for navigation
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
