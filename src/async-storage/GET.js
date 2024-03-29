import AsyncStorage from '@react-native-community/async-storage';
import store from '../store';
import {SET_USER, SET_CONTACTS} from '../actions/types';

async function getUsers() {
  console.log('%cgetUsers()', 'color: #ff0000');

  try {
    const users = await AsyncStorage.getItem('users');
    if (users) {
      // We have data
      console.log('%cWe have data', 'color: #00ff00');
      console.log(users);

      return JSON.parse(users);
    } else {
      return null;
    }
  } catch (error) {
    // Error retrieving data
    console.log('%cGET USERS ERROR', 'color: #ff0000');
    console.log(error);
  }
}

const getUser = async userObj => {
  console.log('%cgetUser()', 'color: #ff00aa');

  try {
    const users = await getUsers();
    if (users && userObj) {
      let user = null;
      for (let i = 0; i < users.length; i++) {
        if (users[i].login === userObj.login) {
          if (users[i].password === userObj.password) {
            user = users[i];
            delete user.password;
          }
        }
      }
      console.log('%cWe have user', 'color: #00ff00');
      console.log(user);

      store.dispatch({type: SET_USER, payload: user});
    } else {
      return null;
    }
  } catch (error) {
    // Error retrieving data
    console.log('%cGET USER ERROR', 'color: #ff0000');
    console.log(error);
  }
};

const getContacts = async () => {
  console.log('%cgetContacts()', 'color: #ff0000');

  try {
    const contacts = await AsyncStorage.getItem('contacts');
    if (contacts !== null) {
      // We have data
      console.log('%cWe have contacts', 'color: #00ff00');
      console.log(contacts);

      // store.dispatch({type: SET_CONTACTS, payload: JSON.parse(contacts)});
      return JSON.parse(contacts);
    } else {
      return null;
    }
  } catch (error) {
    // Error retrieving data
    console.log('%cGET CONTACTS ERROR', 'color: #ff0000');
    console.log(error);
  }
};

const getContactsById = async id => {
  console.log('%cgetContactsById()', 'color: #ff00aa');
  console.log(id);

  try {
    const data = await AsyncStorage.getItem('contacts');
    if (data) {
      const contacts = JSON.parse(data);
      const newContacts = [];
      contacts.map(x => {
        if (x.userId === id) {
          newContacts.push(x);
        }
      });

      console.log('%cWe have contacts by id', 'color: #00ff00');
      console.log(newContacts);

      store.dispatch({type: SET_CONTACTS, payload: newContacts});
      return newContacts;
    } else {
      return null;
    }
  } catch (error) {
    // Error retrieving data
    console.log('%cGET CONTACT ERROR', 'color: #ff0000');
    console.log(error);
  }
};

export {getUsers, getUser, getContacts, getContactsById};
