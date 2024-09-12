import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor:'#D8EFDF'}}>
      <View style={{ flex :2, height: 60, backgroundColor:'#D8EFDF', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>LOGIN</Text>
      </View>
      <View style={{  padding: 20 }}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        
        <Button title="LOGIN" color="#FF6347" onPress={() => alert(`Login attempt with email: ${email}`)} />
      </View>
      <View style={{flex:1, alignItems: 'center', marginTop: 20}}>
        <Text>When you agree to terms and conditions</Text>
        <Text>Forgot your password?</Text>
        <Text>Or login with</Text>
      </View>
      <View style={{ flex :1,flexDirection: 'row', justifyContent: 'space-around', padding: 20}}>
        <TouchableOpacity onPress={() => alert('Login with Facebook')}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>f</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Login with Z')}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Z</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Login with Google')}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>G</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
