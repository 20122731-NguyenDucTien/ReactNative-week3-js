import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Eye Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/?size=100&id=e1GFi02rCDbK&format=png&color=000000' }}
          style={styles.eyeImage}
        />
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Please input your name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Please input password"
          secureTextEntry
        />
      </View>

      {/* Login Button */}
      <View style={styles.buttonContainer}>
        <Button 
          title="LOGIN" 
          color="blue" 
          onPress={() => alert(`Login attempt with username: ${name}`)} 
        />
      </View>

      {/* Register and Forgot Password Buttons */}
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => alert('Register button pressed')}>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Forgot password button pressed')}>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Other Login Methods */}
      <View style={styles.otherLoginContainer}>
        <Text style={styles.otherLoginText}>Other Login Methods</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeImage: {
    width: 80,
    height: 80,
  },
  inputContainer: {
    flex: 2,
    padding: 20,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  linkContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
  },
  otherLoginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherLoginText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

