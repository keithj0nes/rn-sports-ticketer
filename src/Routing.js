import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Second from './screens/Second';
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
    initialRouteName: 'Home'
  })

export default Routing;
