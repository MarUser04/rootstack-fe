import React from 'react';
import {View } from 'react-native';

import NavOption from './nav-option';

export default class FooterNav extends React.Component {
  render() {
    return (
      <View style={{
        height: 60,
        borderTopColor: '#d8dbf7',
        borderTopWidth: 1,
        flexDirection: 'row'
      }}>
        <NavOption
          icon='ios-home' 
          text='HOME'
          active={true}
        />
        <NavOption
          icon='ios-search' 
          text='EXPLORE'
          active={false}
        />
       <NavOption
          icon='ios-list' 
          text='MY QUEUES'
          active={false}
        />
       <NavOption
          icon='ios-person' 
          text='PROFILE'
          active={false}
        />
      </View>
    );
  }
}
