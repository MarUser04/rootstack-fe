import React from 'react';
import {View } from 'react-native';

export default class HorizontalRule extends React.Component {
  render() {
    return (
      <View
        style={{
          borderBottomColor: '#d8dbf7',
          borderBottomWidth: 1,
          marginRight: 15,
          marginLeft: 15
        }}
      />
    );
  }
}