import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Font } from 'expo';

import SearchBar from './components/search-bar';
import MainPage from './components/main-page';
import FooterNav from './components/footer-nav';

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
          <View style={{flex: 1}}>
            <ScrollView>
              <SearchBar />
              <MainPage />
            </ScrollView>
            <FooterNav/>
          </View>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
