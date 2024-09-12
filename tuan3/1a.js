import { Text,View, Button} from 'react-native';

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex:2, backgroundColor: '#C7F4F6',  }}>
        <View
                style={{
          height: 140,
          width: 140, 
          top: 40,
          left: 100,
          gap: 10,
          borderRadius:90,         borderWidth: 15,
          borderColor: 'black',
          backgroundColor: 'transparent',
                }}>
      </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#D1F4F6', justifyContent: 'center', alignItems: 'center' }}>
        <Text>    GROW  </Text>
        <Text>   YOUR BUSINESS </Text>
      </View>

      <View style={{ flex: 1, backgroundColor: '#D1F4F6', justifyContent: 'center', alignItems: 'center' }}>
        <Text>We will help you to grow your business using</Text>
        <Text> online server</Text>

      </View>

      <View style={{ flex: 1, backgroundColor: '#D1F4F6', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Button title="LOGIN" color='#FFC107'> </Button>
        <Button title="SIGN UP" color='#FFC107'> </Button>
      </View>
      <View style={{flex:0.22, backgroundColor:'#E5F4F5', flexDirection: 'center', alignItems:'center'}}>
              <Text> HOW WE WORK?</Text>
              </View>
      <View style={{flex:1,backgroundColor:'#37D6F8'}}></View>
      
    </View>
  );
}

