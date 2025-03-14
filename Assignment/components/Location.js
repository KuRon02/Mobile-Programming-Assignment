import { useNavigation } from '@react-navigation/native';
import { useFireLocations } from '../firebase/FirestoreController';
import { Text, View, Pressable, FlatList } from 'react-native';
import Styles from '../styles/Style.js';
import { IconButton } from 'react-native-paper';

//Main page of the app, shows the list of locations in the database
export function Locations() {

  //Enable navigation
  const navigation = useNavigation();
  //Load database information
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

//Component that shows location information: Name, Description and stars 0-5
//Map icon navigates to map view and also passes location name as argument. Location name is then used to search location coordinates
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