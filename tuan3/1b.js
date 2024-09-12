import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function ForgetPasswordScreen() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/61/61457.png' }} 
        style={styles.icon}
      />

      <Text style={styles.title}>FORGET PASSWORD</Text>

      <Text style={styles.description}>
        Provide your account's email for which you want to reset your password
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="NEXT" color="#FFC107" onPress={() => alert(`Email entered: ${email}`)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C7F4F6',
    paddingHorizontal: 20,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    padding: 10,
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
});
