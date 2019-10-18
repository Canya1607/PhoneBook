import AsyncStorage from '@react-native-community/async-storage';

const getUsers = async () => {
  console.log('%cgetUsers()', 'color: #ff0000');

  try {
    const users = await AsyncStorage.getItem('users');
    if (users !== null) {
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
};

const getUser = async id => {
  console.log('%cgetUser()', 'color: #ff00aa');
  console.log(id);
  if (id < 1 || id === null || id === undefined) {
    return null;
  }
  try {
    const users = await AsyncStorage.getItem('users');
    if (users === null || id > users.length + 1) {
      return null;
    }
    const user = JSON.parse(users)[id - 1];

    console.log('%cWe have user', 'color: #00ff00');
    console.log(user);

    return user;
  } catch (error) {
    // Error retrieving data
    console.log('%cGET USER ERROR', 'color: #ff0000');
    console.log(error);
  }
};

const getContacts = async id => {
  console.log('%cgetContact()', 'color: #ff0000');
};

const getKeys = async () => {
  console.log('%cgetKeys()', 'color: #ff0000');

  try {
    const value = await AsyncStorage.getAllKeys();
    if (value !== null) {
      console.log(value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
    console.log('%cGET KEYS ERROR', 'color: #ff0000');
    console.log(error);
  }
};

export {getUsers, getUser, getContacts, getKeys};
