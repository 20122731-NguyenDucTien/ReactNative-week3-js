import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setbirthday] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor:'#D8EFDF'}}>
      <View style={{ flex :2, height: 60, backgroundColor:'#D8EFDF', justifyContent: 'center', alignItems: 'center',flexDirection :'center' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>REGISTER</Text>
      </View>
      <View style={{ flex :7,padding: 20 }}>
        <TextInput
          style={styles.input}
          onChangeText={setname}
          value={name}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setphone}
          value={phone}
          placeholder="Phone"
          secureTextEntry
        />
                <TextInput
          style={styles.input}
          onChangeText={setemail}
          value={email}
          placeholder="Email"
          secureTextEntry
        />
                <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
                <TextInput
          style={styles.input}
          onChangeText={setbirthday}
          value={birthday}
          placeholder="Birthday"
          secureTextEntry
        />
      <Text style={{flex:1}}>Male      Female</Text>



      </View>
      <View style={{ flex :1,padding: 25 }}>
        <Button title="REGISTER" color="#FF6347" onPress={() => alert(`Login attempt with email: ${email}`)} />
      </View>
      <View style={{flex:1, alignItems: 'center',justifyContent: 'flex-start', flexDirection: 'flex-start'}}>
        <Text>When you agree to terms and conditions</Text>

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
