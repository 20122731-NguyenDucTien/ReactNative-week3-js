import { Text,View, Button, Image } from 'react-native';

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: '#00CFFF',  }}>
        <View
                style={{
          height: 140,
          width: 140, 
          top: 67,
          left: 100,
          borderRadius:90,         borderWidth: 15,
          borderColor: 'black',
          backgroundColor: 'transparent',
                }}>
      </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#00CFFF', justifyContent: 'center', alignItems: 'center' }}>
        <Text>    GROW  </Text>
        <Text>   YOUR BUSINESS </Text>
      </View>

      <View style={{ flex: 1, backgroundColor: '#00CFFF', justifyContent: 'center', alignItems: 'center' }}>
        <Text>We will help you to grow your business using</Text>
        <Text> online server</Text>

      </View>

      <View style={{ flex: 1, backgroundColor: '#00CFFF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Button title="LOGIN" color='#FFC107'> </Button>
        <Button title="SIGN UP" color='#FFC107'> </Button>
      </View>
    </View>
  );
}

