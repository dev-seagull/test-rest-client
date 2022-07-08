import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput,Button } from 'react-native';

export default function App() {
  const [text, setText] = useState("")
  const [name, setName] = useState("Hello World!")

  const handlePressBTN = () => {
    fetch(`http://10.0.2.2:8080/greeting?name=${text}`)
    .then(response => response.json())
    .then(data => setName(data.content));
  }

  useEffect(() => {console.log(name)},[name])

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Rest api Get method</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name: "
        onChangeText={setText}
        value={text}
      />
      <Button style={styles.button}
        title="Submit your Get request"
        onPress={handlePressBTN}
      />
      <Text> Get output: {name}</Text>
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
  head: {
    fontSize: 20,
    margin: 20,
    padding: 20
  },
  input: {
    fontSize: 24,
    border: 1,
    borderColor:"black",
    margin: 5
  },
  button: {
    backgroundColor: "blue",
    fontSize: 15,
  }
});