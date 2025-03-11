import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Styles from './styles/Style.js';
import { useFireLocations } from './firebase/FirestoreController.js';

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

function Locations() {

  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text>Locations</Text>
      <Pressable onPress={() => navigation.navigate('Maps') }>
        <Text>Add new location</Text>
      </Pressable>
    </View>
  );
}

function Maps() {
  return (
    <Text>Maps here</Text>
  )
}
