import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import data from '../data.json';
import moment from 'moment';
import Button from './common/Button';

class Schedule extends React.Component {

  indexIsEven = (n) => {
    return n % 2 === 1;
  }

  renderSchedule = () => {
    return data.schedule.map((game, index) => {
      const vs = game.home ? 'VS' : '@'
      return (

        <Button
          key={game.gameId}
          onPress={()=>{this.props.navigation.navigate('Second', {game})}}
          style={{
            buttonStyle: [styles.listStyle, {backgroundColor: this.indexIsEven(index) ? '#00937A': '#93C1C9'}],
            textStyle: {color: this.indexIsEven(index) ? 'white': null}
          }}>
           {game.team} {vs} {game.opponent} | {moment.unix(game.date).format('M/D/YY')}
        </Button>
      )
    })
  }


  render(){
    console.log(data, 'data');
    return (
      <View style={{width: '100%'}}>
        {this.renderSchedule()}
      </View>
    )
  }
}

const styles = {
  listStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#93C1C9'
  },
  buttonStyles: {
    buttonStyle: {
      backgroundColor: 'pink'
    },
    textStyle: {
      color: 'teal'
    }
  }
}

export default Schedule;

// <View key={game.gameId} style={[styles.listStyle, {backgroundColor: this.indexIsEven(index) ? '#00937A': '#93C1C9'}]}>
//   <Text style={{color: this.indexIsEven(index) ? 'white': null}} >{game.team} {vs} {game.opponent} | {moment.unix(game.date).format('M/D/YY')}</Text>
// </View>

// <TouchableOpacity onPress={whenPressed} style={[buttonStyle, ds ? dangerStyle : null]}>
//   <Text style={[textStyle, ds ? dangerTextStyle : null]}>
//     {children}
//   </Text>
// </TouchableOpacity>
