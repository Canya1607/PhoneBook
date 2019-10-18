import AsyncStorage from '@react-native-community/async-storage';
import {getUsers} from './GET';

const addUser = async userObj => {
  console.log('%caddUser()', 'color: #ff0000');

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
  try {
    await AsyncStorage.setItem('users', JSON.stringify(usersArr));
  } catch (error) {
    // Error saving data
    console.log('%cADD USER', 'color: #ff0000');
    console.log(error);
  }
};

const addContact = async contactsObj => {
  console.log('%caddContact()', 'color: #ff0000');

  const contactsArr = [];
  contactsArr.push(contactsObj);
  try {
    await AsyncStorage.setItem('contacts', JSON.stringify(contactsArr));
  } catch (error) {
    // Error saving data
    console.log('%cADD CONTACT ERROR', 'color: #ff0000');
    console.log(error);
  }
};

export {addUser, addContact};
