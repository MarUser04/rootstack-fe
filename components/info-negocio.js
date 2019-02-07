import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';

export default class InfoNegocio extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <Image 
          style={styles.image}
          source={require('../assets/images/logo.png')}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.info}>{this.props.address} - {this.props.km} km</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 100,
  },
  infoContainer: {
    flex: 2,
    flexDirection: 'column',
  },
  name: {
    marginTop: 25,
    color: '#505676',
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    marginTop: 10,
    color: '#9393b9'
  }
})