import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor:'#EEC900'}}>
      <View style={{ flex :2, height: 60,justifyContent: 'center', alignItems: 'space-around',flexDirection :'center' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>   LOGIN</Text>
      </View>
      <View style={{ flex :2,padding: 20 }}>
        <TextInput
          style={styles.input}
          onChangeText={setname}
          value={name}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Phone"
          secureTextEntry
        />
      </View>
      <View style={{ flex :1,padding: 25 }}>
        <Button title="LOGIN" color="black" fontSize='20' fontWeight ='bold' onPress={() => alert(`Login attempt with email: ${email}`)} />
      </View>
      <View style={{flex:2, alignItems: 'center',justifyContent: 'flex-start', flexDirection: 'flex-start'}}>
        <Text style={{fontSize:20, fontWeight:'BOLD'}}>CREATE ACCOUNT</Text>

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
