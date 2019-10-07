/**
 * Phonebook
 * https://github.com/Canya1607/PhoneBook
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppContainer from './routes/index';

class App extends React.Component {
  render() {
    //TODO: Remove then
    console.disableYellowBox = true;
    return <AppContainer />;
  }
}

export default App;
