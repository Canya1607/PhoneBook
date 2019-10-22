import {combineReducers} from 'redux';
import contacts from './contacts';
import users from './users';

const PhoneBook = combineReducers({
  users,
  contacts,
});

export default PhoneBook;
