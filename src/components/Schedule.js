import React from 'react';
import { View, Text } from 'react-native';
import data from '../data.json';
import moment from 'moment';

class Schedule extends React.Component {

  indexIsEven = (n) => {
    return n % 2 === 1;
  }

  renderSchedule = () => {
    return data.schedule.map((game, index) => {
      const vs = game.home ? 'VS' : '@'
      return (
        <View key={game.gameId} style={[styles.listStyle, {backgroundColor: this.indexIsEven(index) ? '#00937A': '#93C1C9'}]}>
          <Text style={{color: this.indexIsEven(index) ? 'white': null}} >{game.team} {vs} {game.opponent} | {moment.unix(game.date).format('M/D/YY')}</Text>
        </View>
      )
    })
  }
  render(){
    console.log(data, 'data');
    return (
      <View style={{backgroundColor: 'pink', width: '100%'}}>
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
  }
}

export default Schedule;
