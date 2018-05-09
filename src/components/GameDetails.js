import React from 'react';
import { View, Text } from 'react-native';
import Button from './common/Button';

class GameDetails extends React.Component {
  render(){
    return (
      <View>
        <View>
          <Text>{this.props.game.team}</Text>
          <Button defaults onPress={this.props.next}>Purchase tickets</Button>
          <Text>More details about game if neccessary</Text>
        </View>
      </View>
    )
  }
}

export default GameDetails;
