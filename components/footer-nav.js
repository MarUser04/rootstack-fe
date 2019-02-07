import React from 'react';
import {View } from 'react-native';

import NavOption from './nav-option';

export default class FooterNav extends React.Component {
  render() {
    return (
      <View style={{
        height: 60,
        borderTopColor: '#F7F7F7',
        borderTopWidth: 1,
        flexDirection: 'row'
      }}>
        <NavOption
          icon='home' 
          text='HOME'
          active={true}
        />
        <NavOption
          icon='search1' 
          text='EXPLORE'
          active={false}
        />
        <NavOption
          icon='bars' 
          text='MY QUEUES'
          active={false}
        />
        <NavOption
          icon='user' 
          text='PROFILE'
          active={false}
        />
      </View>
    );
  }
}
