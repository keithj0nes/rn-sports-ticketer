import React from 'react';
import { View, Text, Button, Alert, Image} from 'react-native';
import Schedule from '../components/Schedule';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Image source={require('../images/MetrosLogo.png')} style={{width: 41, height: 60, marginTop: 10}} />
    ),
    headerRight: (
      <Button onPress={()=>Alert.alert('Clicked on headerRight!')} title="right" />
    ),
    // headerStyle: {
    //   backgroundColor: '#93C1C9',
    // },
  }
  render(){
    console.log('getting here');
    return (
      <View style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          HomeScreen
        </Text>
        <Schedule />
        <Button title="Go to Second Screen" onPress={() => this.props.navigation.navigate('Second', {info: 'heres some info', id: 41324})}/>
      </View>
    )
  }
}

export default HomeScreen;
