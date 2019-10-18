import AsyncStorage from '@react-native-community/async-storage';

const addUser = async userObj => {
  console.log('addUser()');
  const usersArr = [];
  usersArr.push(userObj);
  try {
    await AsyncStorage.setItem('users', JSON.stringify(usersArr));
  } catch (error) {
    // Error saving data
  }
};

const addContact = async contactsObj => {
  console.log('addContact()');
  const contactsArr = [];
  contactsArr.push(contactsObj);
  try {
    await AsyncStorage.setItem('contacts', JSON.stringify(contactsArr));
  } catch (error) {
    // Error saving data
  }
};

export {addUser, addContact};
