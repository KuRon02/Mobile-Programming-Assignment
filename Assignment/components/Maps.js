import { Button, Text, View } from "react-native";
import Styles from '../styles/Style.js';
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView from 'react-native-maps';

export function Maps({ route }) {

    const { locationName } = route.params;
    const [lon, setLongitude] = useState(0);
    const [lat, setLatitude] = useState(0);

    useEffect(() => {
        getLocation(locationName);
        async function getLocation(locationName) {

            const {status} = await Location.requestForegroundPermissionsAsync();
    
            if (status !== 'granted') {
                return;
            }
    
            const location = await Location.geocodeAsync(locationName);
    
            setLatitude(location[0].latitude);
            setLongitude(location[0].longitude);
        }
    }, []);
    

    return (
        <View style={Styles.mapCont}>
            <MapView style={Styles.map} region={{latitude: lat, longitude: lon, latitudeDelta: 0.922, longitudeDelta: 0.0421}}></MapView>
        </View>
    );
}