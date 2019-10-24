/**
 * Phonebook
 * https://github.com/Canya1607/PhoneBook
 *
 * @format
 * @flow
 */

import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import AppContainer from './routes/index';

class App extends React.Component {
  render() {
    //TODO: Remove in Release
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
