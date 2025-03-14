import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex:1,
        padding: 30,
    },
    place: {
        borderWidth: 1,
        padding:10,
        marginBottom:10,
    },
    text: {
        fontSize: 20,
    },
    textInput: {
        padding:5,
        backgroundColor:"#b0a5af",
        marginBottom:10,
    },
    buttonText: {
        backgroundColor:"#b08fae",
        borderRadius:15,
        padding:15,
        marginBottom:10,
        textAlign:"center"
    },
    starRow: {
        flexDirection: 'row',
        backgroundColor: '#a8a7a8',
    },
    starRowEdit: {
        flexDirection: 'row',
        backgroundColor: '#a8a7a8',
        marginBottom:10
    },
    starEmpty: {
        icon: 'star-outline',
    },
    mapCont: {
        flex: 1,
    },
    map: {
        flex: 1,
    }
})