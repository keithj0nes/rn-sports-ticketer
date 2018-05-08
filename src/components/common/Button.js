import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

//Button component takes in style and defaults as props
//style should be an object with buttonStyle and/or textStyle
//defaults gives default styling below

const Button = ({onPress, style, children, defaults}) =>{
  return (
    <TouchableOpacity onPress={onPress} style={[defaults ? styles.defaults : null, style && style.buttonStyle]}>
      <Text style={style && style.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}


//default button styles
  const styles = {
    defaults: {
      // flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5
    }
  }

export default Button;
