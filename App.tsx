import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import api from "./components/apiServicess"

export default function App() {
  api.getAllUsers()
  api.updateUser({id:1, title:"FOO", body:"BAR",userId:1})
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
