import React from 'react';
import { View, Text, ImageBackground, Dimensions, Image } from 'react-native';
import moment from 'moment';

class GameDetailsHeader extends React.Component {
  render(){
    console.log(this.props);
    const { date, arena } = this.props.game;
    return (
      <View style={{height: Dimensions.get('window').height / 2.7, width: '100%'}}>
        <ImageBackground source={require('../images/fan-background.jpg')} style={{width: '100%', height: '100%'}} >

          <View style={styles.matchupContainer}>
            <View style={styles.matchupImageStyles}>

              <View style={{width:'33%', alignItems: 'center'}}>
                <Image source={require('../images/MetrosLogo.png')} style={{height: 100, width: 68}}/>
              </View>

              <View style={{width:'33%', alignItems: 'center'}}>
                <View style={styles.vsCircle}>
                  <Text style={{fontSize: 18, color: '#f1f1f1'}}>VS</Text>
                </View>
              </View>

              <View style={{width:'33%', alignItems: 'center'}}>
                <Image source={require('../images/CanucksLogo.png')} style={{height: 100, width: 100}}/>
              </View>

            </View>

            <View style={styles.dateDetails.container}>
              <Text style={styles.dateDetails.text}>{moment.unix(date).format('dddd, MMM D')}</Text>
              <Text style={styles.dateDetails.text}>{moment.unix(date).format('h:mm')} @ {arena}</Text>
            </View>

          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = {
  matchupContainer: {
    // backgroundColor: 'red',
    flex: 1,
    // opacity: 0.4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  matchupImageStyles: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  vsCircle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateDetails: {
    container:{
      flex: 1,
      alignItems: 'center',
      // backgroundColor: 'yellow',
      width: '100%',
    },
    text: {
      fontSize: 20,
      color: '#fff',
      // fontFamily: 'StratumNo1Regular'
    }

  }
}

  export default GameDetailsHeader;
