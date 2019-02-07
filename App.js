import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

//Components
import SearchBar from './components/search-bar';
import MainPage from './components/main-page';

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
            <SearchBar />
            <MainPage />
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
