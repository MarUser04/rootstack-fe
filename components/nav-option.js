import React from 'react';
import {Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class NavOption extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        marginLeft: 15
      }}>

        <Ionicons style={this.props.active ? {color: '#2186eb', marginLeft: 17} : {color: '#9393b9', marginLeft: 12}} name={this.props.icon} size={30} />
        <Text  
          style={this.props.active ?
          {color: '#2186eb', 
          fontFamily: 'montserrat-regular',
          fontSize:10, 
          marginLeft: 15
          } 
          : {color: '#9393b9', 
            fontFamily: 'montserrat-regular',
            fontSize:10
            }}>
            {this.props.text}
          </Text>
      </View>
    );
  }
}
