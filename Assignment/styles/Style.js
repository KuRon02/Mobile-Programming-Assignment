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
        margin:10,
        padding:5,
    }
})