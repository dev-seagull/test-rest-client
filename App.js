import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [text, setText] = useState("")
  const [name, setName] = useState("World!")
  const handlePressBTN = () => {
    fetch('https://run.mocky.io/v3/b41c988f-6e61-4d08-b57e-f29b3a4a041f').then(response => response.json()).then(data => setName(data.name));
    console.log(name)
  }
} 