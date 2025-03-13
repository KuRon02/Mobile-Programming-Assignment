import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { addLocation, useFireLocations } from '../firebase/FirestoreController';
import { StyleSheet, Text, View, Button, Switch, Pressable } from 'react-native';
import Styles from '../styles/Style.js';

export function Locations() {

  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Text>Locations</Text>
      <Pressable onPress={() => navigation.navigate('Maps') }>
        <Text>Go to maps</Text>
      </Pressable>
      <Pressable onPress={() => addLocation("Oulu") }>
        <Text>Add oulu</Text>
      </Pressable>
      <Place></Place>
    </View>
  );
}

function Place() {
    return (
      <View style={Styles.place}>
        <Text title={"hei"}></Text>
      </View>
    );
}