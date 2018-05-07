// import React from 'react';
// // import { View, Text } from 'react-native';
// import Routing from './Routing';
// import { StackNavigator } from 'react-navigation';
//
// class App extends React.Component {
//   render(){
//     // return (
//     //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     //     <Text>
//     //       Hello World
//     //     </Text>
//     //   </View>
//     // )
//
//     return (
//       <Routing />
//     )
//   }
// }
//
// export default App;
//
// // export default StackNavigator({
// //   Home: {
// //     screen: App
// //   }
// // })


import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Routing from './Routing';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }
//
// const RootStack = StackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });

// export default StackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });
class App extends React.Component {
  render() {
    return (
 <Routing />

    )
  }
}

export default App;
