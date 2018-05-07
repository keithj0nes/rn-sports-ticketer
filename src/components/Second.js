import React from 'react';
import { Button, View, Text } from 'react-native';

class Second extends React.Component {
  static navigationOptions = ({navigation}) => {

    const { params } = navigation.state;
    return {
      title : params.id ? params.id : 'none',
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
  render(){
    const {info, id } = this.props.navigation.state.params;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          SECOND SCREEEEn
        </Text>
        <Text>{info}</Text>
        <Text>{id}</Text>
        <Button title="Go back" onPress={()=>{this.props.navigation.navigate('Home')}} />
        <Button title="new title!" onPress={()=> this.props.navigation.setParams({id: 'hellooo'})}/>
      </View>
    )
  }
}

export default Second;
