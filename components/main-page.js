import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

//Components
import InfoNegocio from './info-negocio';
import HorizontalRule from './horizontal-rule';

export default class MainPage extends React.Component {
  render() {
    return (
      <View style={{
        backgroundColor: '#ffffff',
        color: '#9393b9',
        fontFamily: 'montserrat-regular',
        marginTop: 20
      }}>
        <Text style={styles.title}>Negocios cercanos a ti</Text>
        <InfoNegocio 
          name="Cable Onda"
          address="Altaplaza Mali"
          km="1.2"
        />
        <HorizontalRule />
         <InfoNegocio 
          name="Cable Onda"
          address="El Dorado"
          km="2.2"
        />
        <HorizontalRule />
         <InfoNegocio 
          name="Cable Wireless"
          address="El Dorado"
          km="2.2"
        />
        <HorizontalRule />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'montserrat-regular',
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#505676'
  }
})