import React from 'react';
import { ScrollView, Button, View, Text, TouchableOpacity } from 'react-native';
import {SlidingPane, SlidingPaneWrapper} from 'react-native-sliding-panes';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import moment from 'moment';

import GameDetailsHeader from '../components/GameDetailsHeader';
import GameDetails from '../components/GameDetails';
import SelectSeats from '../components/SelectSeats';


class Second extends React.Component {

  state = {
    gameActive: true,
    seatsActive: false,
    paymentActive: false,
    confirmActive: false
  }

  componentDidMount() {
    this.pane1.warpCenter();
    this.pane2.warpRight();
    this.pane3.warpRight();
    this.pane4.warpRight();

    this.slidingPaneWrapper.childPanes = [this.pane1, this.pane2, this.pane3, this.pane4];
  }

  static navigationOptions = ({navigation}) => {

    // const { params } = navigation.state;
    // const h = Dimensions.get('window').height / 2.7;
    return {
      header: null
      // headerTitle: (
      //   <Image source={require('../images/fan-background.jpg')} style={{width: '100%', height: '100%'}} />
      // ),
      // headerStyle:{height: h, marginTop: -20},
      // headerLeft: null
      // title : params.id ? params.id : 'none',
      // headerStyle: {
      //   backgroundColor: '#333',
      // },
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // }
    }
  }
  render(){

    const swipe_config = {
         velocityThreshold: 0.3,
         directionalOffsetThreshold: 80
       };

       let navLinkClicked = (text, active) => {
         console.log(text, 'TEXT CLICKED');
         console.log(active);
         console.log(this.state);
         this.setState((prev, props) => {
           console.log(prev, props);
           let newState = {...prev};
           for(key in newState){
             newState[key] = false
             // console.log(newState[key]);
           }
            newState[active] = !this.state[active];
            console.log(newState, 'ahhh!');
           return newState
         })

         switch (text) {
           case 'Game Details':
             this.slidingPaneWrapper.setActive(0);
             break;
           case 'Select Seats':
             this.slidingPaneWrapper.setActive(1);
             break;
           case 'Payment Info':
             this.slidingPaneWrapper.setActive(2);
             break;
           case 'Confirm Purchase':
             this.slidingPaneWrapper.setActive(3);
             break;
         }
       };

       const onSwipe = (gestureName, gestureState) => {
         console.log(gestureName);
         const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
         switch (gestureName) {
           case SWIPE_LEFT:
             this.slidingPaneWrapper.slideAllLeft();
             break;
           case SWIPE_RIGHT:
             this.slidingPaneWrapper.slideAllRight();
             break;
           default:
             break;
         }
       };

       let renderNavBarButton = (text, active, additional_styles) => {
         // console.log('text', text);
         return  (
                <TouchableOpacity activeOpacity={0.1} style={ [styles.navLink, additional_styles.container] } onPress={() => {navLinkClicked(text, active)}}>
                   <View style={ { flexDirection: 'row' } }>
                     <Text style={[styles.navLinkText, additional_styles.text]}>{text}</Text>
                   </View>
                 </TouchableOpacity>
               )
       };



    const { opponent, date, arena } = this.props.navigation.state.params.game;
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>

        <GameDetailsHeader game={{date, arena}}/>

        <SlidingPane style={{ flex: 1, backgroundColor: 'yellow',borderColor: 'red', borderWidth: '1' }} ref={ (myPane) => this.myPane = myPane }>
          <View>
            <Text>This is myPane</Text>
          </View>
        </SlidingPane>





        <View style={styles.container}>

                 <View style={{ width: '100%' }}>
                   <View style={styles.navBarBuffer} />
                   <ScrollView horizontal decelerationRate={0} snapToInterval={50} snapToAlignment={"center"}>
                       { renderNavBarButton('Game Details', 'gameActive', { container: this.state.gameActive ? styles.navlinkContainerActive : null, text: this.state.gameActive ? styles.navLinkTextActive: null }) }
                       { renderNavBarButton('Select Seats', 'seatsActive', { container: this.state.seatsActive ? styles.navlinkContainerActive : null, text: this.state.seatsActive ? styles.navLinkTextActive: null}) }
                       { renderNavBarButton('Payment Info', 'paymentActive', { container: this.state.paymentActive ? styles.navlinkContainerActive : null, text: this.state.paymentActive ? styles.navLinkTextActive: null}) }
                       { renderNavBarButton('Confirm Purchase', 'confirmActive', {container: this.state.confirmActive ? styles.navlinkContainerActive : null, text: this.state.confirmActive ? styles.navLinkTextActive: null}) }
                   </ScrollView>
                 </View>
                 <SlidingPaneWrapper style={{}} ref={(slidingPaneWrapper) => { this.slidingPaneWrapper = slidingPaneWrapper }}>

                   <SlidingPane style={[{borderColor: '#fff', borderWidth: 2}]} ref={ (pane1) => { this.pane1 = pane1} }>
                     <GameDetails game={this.props.navigation.state.params.game} next={()=>{this.slidingPaneWrapper.setActive(1); navLinkClicked('Select Seats', 'seatsActive')}}/>
                   </SlidingPane>

                   <SlidingPane style={[{borderColor: '#fff', borderWidth: 2}]} ref={ (pane2) => { this.pane2 = pane2} }>
                     <SelectSeats />
                   </SlidingPane>

                   <SlidingPane style={[{borderColor: '#fff', borderWidth: 2}]} ref={ (pane3) => { this.pane3 = pane3} }>
                     <View style={styles.container}>
                       <Text style={styles.paneText}>3</Text>
                     </View>
                   </SlidingPane>

                   <SlidingPane style={[{borderColor: '#fff', borderWidth: 2}]} ref={ (pane4) => { this.pane4 = pane4} }>
                     <View style={styles.container}>
                       <Text style={styles.paneText}>4</Text>
                     </View>
                   </SlidingPane>

                 </SlidingPaneWrapper>

       </View>

        <Text>{opponent}</Text>
        <Text>{moment.unix(date).format('dddd, MMM D')}</Text>
        <Button title="Go back" onPress={()=>{this.props.navigation.navigate('Home')}} />
        <Button title="new title!" onPress={()=> this.props.navigation.setParams({opponent: 'hellooo'})}/>
      </View>
    )
  }
}






const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F8ECC2'
  },
  navBarBuffer: {
    height: 20,
    // backgroundColor: '#FFFFFF'
  },
  navBar: {
    height: 40,
    backgroundColor: '#EEEEFF',
    // width: '100%',
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    borderTopColor: '#DDDDDD',
    borderTopWidth: 1,
    flexDirection: 'row'
  },
  navLink: {
    // flex: 1,
    // width: '100%',
    alignItems: 'center'
  },
  navlinkContainerActive: {
    borderBottomColor:'#004D2F',
    borderBottomWidth: 2
  },
  navLinkText: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 16,
    color: '#93C1C9',
    fontWeight: 'bold'
  },
  navLinkTextActive: {
    color: '#004D2F'
  },
  paneText: {
    fontSize: 22
}

// { renderNavBarButton('Game Details', 'gameActive', { container: {borderRightColor: '#CCCCCC', borderRightWidth: 1, backgroundColor: this.state.gameActive ? 'yellow': null }, text: this.state.gameActive ? styles.navLinkTextActive: null }) }


// <View style={styles.container}>
//        <GestureRecognizer
//          onSwipe={(direction, state) => onSwipe(direction, state)}
//          config={swipe_config}>
//          <View style={{ width: '100%' }}>
//            <View style={styles.navBarBuffer} />
//            <View style={styles.navBar}>
//              { renderNavBarButton('hello', { borderRightColor: '#CCCCCC', borderRightWidth: 1 }) }
//              { renderNavBarButton('2', { borderRightColor: '#CCCCCC', borderRightWidth: 1 }) }
//              { renderNavBarButton('3', { borderRightColor: '#CCCCCC', borderRightWidth: 1 }) }
//              { renderNavBarButton('4', {}) }
//            </View>
//          </View>
//          <SlidingPaneWrapper style={{}} ref={(slidingPaneWrapper) => { this.slidingPaneWrapper = slidingPaneWrapper }}>
//            <SlidingPane style={[{borderColor: '#FF9999', borderWidth: 2}]}
//                         ref={ (pane1) => { this.pane1 = pane1} }>
//              <View style={styles.container}>
//                <Text style={styles.paneText}>1</Text>
//              </View>
//            </SlidingPane>
//            <SlidingPane style={[{borderColor: '#FF9999', borderWidth: 2}]}
//                         ref={ (pane2) => { this.pane2 = pane2} }>
//              <View style={styles.container}>
//                <Text style={styles.paneText}>2</Text>
//              </View>
//            </SlidingPane>
//            <SlidingPane style={[{borderColor: '#FF9999', borderWidth: 2}]}
//                         ref={ (pane3) => { this.pane3 = pane3} }>
//              <View style={styles.container}>
//                <Text style={styles.paneText}>3</Text>
//              </View>
//            </SlidingPane>
//            <SlidingPane style={[{borderColor: '#FF9999', borderWidth: 2}]}
//                         ref={ (pane4) => { this.pane4 = pane4} }>
//              <View style={styles.container}>
//                <Text style={styles.paneText}>4</Text>
//              </View>
//            </SlidingPane>
//          </SlidingPaneWrapper>
//        </GestureRecognizer>
// </View>


}
export default Second;
