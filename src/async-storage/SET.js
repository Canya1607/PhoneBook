import AsyncStorage from '@react-native-community/async-storage';
import {getUsers, getContacts} from './GET';

const addUser = async userObj => {
  console.log('%caddUser()', 'color: #ff0000');

  try {
    const prevUsersArr = await getUsers();
    const usersArr = [];
    let lastId = 1;
    if (prevUsersArr !== null) {
      lastId = prevUsersArr.length + 1;
      prevUsersArr.map(x => usersArr.push(x));
    }
    const newUserObj = {id: lastId, ...userObj};

    console.log('%cprevUsersArr', 'color: #ffff00');
    console.log(prevUsersArr);

    usersArr.push(newUserObj);

    await AsyncStorage.setItem('users', JSON.stringify(usersArr));
  } catch (error) {
    // Error saving data
    console.log('%cADD USER', 'color: #ff0000');
    console.log(error);
  }
};

/**
 * @param {*} { id: 1, name: "NAME", surname: "SURNAME", work: "WORK", address: "ADDRESS", phone: "PHONE"} 
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

    contactsArr.push(contactsObj);
    await AsyncStorage.setItem('contacts', JSON.stringify(contactsArr));
  } catch (error) {
    // Error saving data
    console.log('%cADD CONTACT ERROR', 'color: #ff0000');
    console.log(error);
  }
};

export {addUser, addContact};
