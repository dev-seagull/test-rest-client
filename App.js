import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [text, setText] = useState("")
  const [name, setName] = useState("World!")
  const handlePressBTN = () => {
    fetch('http://localhost:8080/greeting').then(response => response.json()).then(data => setName(data.name));
    console.log(name)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Hello {name}</Text>
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
      <Text>Preview of input: {text}</Text>
      <StatusBar style="auto" />
    </View>
  );
} 