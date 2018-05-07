import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import Second from './components/Second';
import { View, Text } from 'react-native';

const Routing = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Second: {
    screen: Second
  }
},
{
  // initialRouteName: 'Home'
}

)

// class Routing extends React.Component {
//   render(){
//     return (
//       <View>
//         <Text>Hello World</Text>
//       </View>
//     )
//   }
// }

export default Routing;
