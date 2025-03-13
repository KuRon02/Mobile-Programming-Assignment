import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useFireLocations } from '../firebase/FirestoreController';
import { StyleSheet, Text, View, Button, Switch, Pressable, FlatList } from 'react-native';
import Styles from '../styles/Style.js';
import { IconButton } from 'react-native-paper';

export function Locations() {

  const navigation = useNavigation();
  const locationItems = useFireLocations();

  return (
    <View style={Styles.container}>
      <Pressable onPress={() => navigation.navigate('AddLocation') }>
        <Text>Add Location</Text>
      </Pressable>
      <FlatList data={locationItems} renderItem={({item}) => Place(item, navigation)}></FlatList>
    </View>
  );
}

function Place(locationItem, navigation) {

    return (
      <View style={Styles.place}>
        <View style={[Styles.row, {flexDirection: 'row', justifyContent: 'space-between'},]}>
            <Text style={Styles.text}>{locationItem.lName}</Text>
            <Pressable onPress={() => navigation.navigate('Maps') }>
                <IconButton size={35} icon={'map-marker'} iconColor={'red'}></IconButton>
            </Pressable>
        </View>
        <Text>{locationItem.lDescription}</Text>
        <Text>{locationItem.stars}</Text>
      </View>
    );
}