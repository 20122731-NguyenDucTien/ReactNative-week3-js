import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5) {
      inputRefs[index + 1].focus();
    }
  };

  const inputRefs = [];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: '#C7F4F6', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 60, fontWeight: 'bold' }}>CODE</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: '#D1F4F6', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>VERIFICATION</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: '#D1F4F6', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Enter ontime password sent on</Text>
        <Text>++849092605798</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: '#D1F4F6', justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs[index] = ref)}
              value={value}
              onChangeText={(text) => handleChange(text, index)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
            />
          ))}
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#E5F4F5', justifyContent: 'center', alignItems: 'center' }}>
        <Button title="verify code" color="#FFC107" onPress={() => alert(`OTP entered: ${otp.join('')}`)} />
      </View>

      <View style={{ flex: 1, backgroundColor: '#37D6F8', justifyContent: 'center', alignItems: 'center' }}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#000',
    width: 40,
    height: 40,
    fontSize: 24,
    textAlign: 'center',
    margin: 5,
  },
});
