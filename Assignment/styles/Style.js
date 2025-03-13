import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex:1,
        marginTop: Constants.statusBarHeight+10,
        padding: 30,
    },
    place: {
        borderWidth: 1,
        padding:10,
        marginBottom:10,
    },
    text: {
        fontSize: "20px"
    },

    textInput: {
        padding:5,
        backgroundColor:"#b0a5af",
        marginBottom:10,
    },
})