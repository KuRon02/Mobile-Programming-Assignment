import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Styles from '../styles/Style.js';
import { addPlace } from "../firebase/FirestoreController.js";
import { IconButton } from "react-native-paper";

export function AddLocation() {

    const [lName, setlName] = useState('');
    const [lDescription, setlDescription] = useState('');
    const [stars, setStars] = useState(0);

    return (
        <View style={Styles.container}>
            <TextInput style={Styles.textInput} placeholder="Location name" value={lName} onChangeText={setlName}></TextInput>
            <TextInput style={Styles.textInput} placeholder="Description" value={lDescription} onChangeText={setlDescription}></TextInput>
            <View style={Styles.starRowEdit}>
                <IconButton onPress={() => setStars(1)} icon={stars >= 1 ? 'star' : 'star-outline'}></IconButton>
                <IconButton onPress={() => setStars(2)} icon={stars >= 2 ? 'star' : 'star-outline'}></IconButton>
                <IconButton onPress={() => setStars(3)} icon={stars >= 3 ? 'star' : 'star-outline'}></IconButton>
                <IconButton onPress={() => setStars(4)} icon={stars >= 4 ? 'star' : 'star-outline'}></IconButton>
                <IconButton onPress={() => setStars(5)} icon={stars >= 5 ? 'star' : 'star-outline'}></IconButton>
            </View>
            <Button color={"#b08fae"} title={"Add Location"} onPress={()=>addPlace(lName, lDescription, stars)}>Add Location</Button>
        </View>
    );
}