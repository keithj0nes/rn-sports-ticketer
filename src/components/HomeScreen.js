import React from 'react';
import { View, Text, Button, Alert, Image} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Image source={require('../images/MetrosLogo.png')} style={{width: 41, height: 60, marginTop: 10}} />
    ),
    headerRight: (
      <Button onPress={()=>Alert.alert('Clicked on headerRight!')} title="right" />
    )
  }
  render(){
    console.log('getting here');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          HomeScreen
        </Text>
        <Button title="Go to Second Screen" onPress={() => this.props.navigation.navigate('Second', {info: 'heres some info', id: 41324})}/>
      </View>
    )
  }
}

export default HomeScreen;
