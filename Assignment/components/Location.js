import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useFireLocations } from '../firebase/FirestoreController';
import { StyleSheet, Text, View, Button, Switch, Pressable, FlatList } from 'react-native';
import Styles from '../styles/Style.js';
import { Icon, IconButton } from 'react-native-paper';

export function Locations() {

  const navigation = useNavigation();
  const locationItems = useFireLocations();

  return (
    <View style={Styles.container}>
      <Pressable onPress={() => navigation.navigate('AddLocation') }>
        <Text style={Styles.buttonText}>Add new location</Text>
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
            <Pressable onPress={() => navigation.navigate('Maps', {locationName: locationItem.lName}) }>
                <IconButton size={35} icon={'map-marker'} iconColor={'red'}></IconButton>
            </Pressable>
        </View>
        <Text style={[Styles.description, {paddingBottom: 10},]}>{locationItem.lDescription}</Text>
        <View style={Styles.starRow}>
            <IconButton icon={locationItem.stars >= 1 ? 'star' : 'star-outline'}></IconButton>
            <IconButton icon={locationItem.stars >= 2 ? 'star' : 'star-outline'}></IconButton>
            <IconButton icon={locationItem.stars >= 3 ? 'star' : 'star-outline'}></IconButton>
            <IconButton icon={locationItem.stars >= 4 ? 'star' : 'star-outline'}></IconButton>
            <IconButton icon={locationItem.stars >= 5 ? 'star' : 'star-outline'}></IconButton>
        </View>
      </View>
    );
}