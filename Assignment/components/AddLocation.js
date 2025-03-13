import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Styles from '../styles/Style.js';
import { addPlace } from "../firebase/FirestoreController.js";

export function AddLocation() {

    const [lName, setlName] = useState('');
    const [lDescription, setlDescription] = useState('');

    return (
        <View style={Styles.container}>
            <TextInput style={Styles.textInput} label={'Location name'} value={lName} onChangeText={setlName}></TextInput>
            <TextInput style={Styles.textInput} label={'Description'} value={lDescription} onChangeText={setlDescription}></TextInput>
            <Button color={"#b08fae"} title={"Add Location"} onPress={()=>addPlace(lName, lDescription, 4)}>Add Location</Button>
        </View>
    );
}