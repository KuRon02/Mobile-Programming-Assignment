import { View } from "react-native";
import Styles from '../styles/Style.js';
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView from 'react-native-maps';

//Page where you can see the map of the selected location
//route param is from Location.js where this page is called and it contains the name of the location
export function Maps({ route }) {

    const { locationName } = route.params;
    const [lon, setLongitude] = useState(0);
    const [lat, setLatitude] = useState(0);

    //Upon opening the map view searches for coordinates using the location name given
    //Also asks the user for location permissions on first start-up
    useEffect(() => {
        getLocation(locationName);
        
        async function getLocation(locationName) {
            //Ask for location permissions
            const {status} = await Location.requestForegroundPermissionsAsync();
    
            if (status !== 'granted') {
                return;
            }
            //Search for coordinates
            const location = await Location.geocodeAsync(locationName);
            //Save coordinate values
            setLatitude(location[0].latitude);
            setLongitude(location[0].longitude);
        }
    }, []);
    
    //Show map using found coordinates
    return (
        <View style={Styles.mapCont}>
            <MapView style={Styles.map} region={{latitude: lat, longitude: lon, latitudeDelta: 0.922, longitudeDelta: 0.0421}}></MapView>
        </View>
    );
}