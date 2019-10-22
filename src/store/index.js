import Phonebook from '../reducers';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

let store = createStore(Phonebook, composeWithDevTools());

export default store;
