import AsyncStorage from '@react-native-community/async-storage';
import {getUsers, getContacts} from './GET';
import {SET_USER} from '../actions/types';
import store from '../store';

const addUser = async userObj => {
  console.log('%caddUser()', 'color: #ff0000');

  try {
    const prevUsersArr = await getUsers();
    const usersArr = [];
    let lastId = 1;
    if (prevUsersArr) {
      lastId = prevUsersArr.length + 1;
      for (let i = 0; i < prevUsersArr.length; i++) {
        const el = prevUsersArr[i];
        if (el.login === userObj.login) {
          return null;
        }
      }
      prevUsersArr.map(x => usersArr.push(x));
    }
    const newUserObj = {id: lastId, ...userObj};

    console.log('%cprevUsersArr', 'color: #ffff00');
    console.log(prevUsersArr);

    usersArr.push(newUserObj);

    await AsyncStorage.setItem('users', JSON.stringify(usersArr));

    delete newUserObj.password;
    store.dispatch({type: SET_USER, payload: newUserObj});
    return newUserObj;
  } catch (error) {
    // Error saving data
    console.log('%cADD USER', 'color: #ff0000');
    console.log(error);
  }
};

/**
 * @param {*} { id: "cf3432423", userId: 1, name: "NAME", surname: "SURNAME", work: "WORK", address: "ADDRESS", phone: "PHONE"}
 */
const addContact = async contactsObj => {
  console.log('%caddContact()', 'color: #ff0000');

  try {
    const prevContactsArr = await getContacts();
    const contactsArr = [];
    if (prevContactsArr !== null) {
      prevContactsArr.map(x => contactsArr.push(x));
    }

    console.log('%cprevContactsArr', 'color: #ffff00');
    console.log(prevContactsArr);

    const uniqueId = `c${(~~(Math.random() * 1e8)).toString(16)}`;
    const newContactsObj = {id: uniqueId, ...contactsObj};

    contactsArr.push(newContactsObj);
    await AsyncStorage.setItem('contacts', JSON.stringify(contactsArr));
  } catch (error) {
    // Error saving data
    console.log('%cADD CONTACT ERROR', 'color: #ff0000');
    console.log(error);
  }
};

export {addUser, addContact};
