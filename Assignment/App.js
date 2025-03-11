import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Switch } from 'react-native-web';
import Styles from './styles/Style';

export default function App() {
  return (
    <View style={Styles.container}>
      <Text>Locations</Text>
      <Button title='Add new location'></Button>
    </View>
  );
}
