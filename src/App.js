/**
 * Phonebook
 * https://github.com/Canya1607/PhoneBook
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppContainer from './routes/index';

// // //
const defState = {name: 'Olexandr'};
const reducer = (state = defState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const store = createStore(reducer);
// // //

class App extends React.Component {
  render() {
    //TODO: Remove then
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
