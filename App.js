import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/search-bar';
import { Font } from 'expo';

export default class App extends React.Component {

  state = {
    loading: false
  }

  async componentWillMount() {
    await Font.loadAsync({
      'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf')
    });
    this.setState({ loading: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading ? (
          <View>
            <SearchBar></SearchBar>
            <View style={{
              backgroundColor: '#ffffff',
              color: '#9393b9'
              }}>
              <Text>Roostack - FE </Text>
            </View>
          </View>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
