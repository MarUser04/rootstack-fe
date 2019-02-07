import React from 'react';
import {StyleSheet, TextInput, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default class SearchBard extends React.Component {
  render() {
    return (
      <View style={{
        height: 90
      }}>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Lugares cerca de mi"
                underlineColorAndroid="transparent"
            />
            <Ionicons  style={styles.icon} name="ios-search" size={20} color="#b1b1b9"/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDF7',
  },
  icon: {
    padding: 13.5,
    marginLeft:0,
    marginRight:20,
    backgroundColor: '#fff'
  },
  input: {
      flex: 1,
      marginLeft:20,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 5,
      backgroundColor: '#fff',
      color: '#b1b1b9',
      fontFamily: 'montserrat-regular'
  }
});