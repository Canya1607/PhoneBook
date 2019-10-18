import AsyncStorage from '@react-native-community/async-storage';

const getUser = async () => {
  console.log('addUser()');
  try {
    const value = await AsyncStorage.getItem('users');
    if (value !== null) {
      // We have data
      console.log(value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
};

const getContact = async id => {
  console.log('addContact()');
};

const getKeys = async () => {
  try {
    const value = await AsyncStorage.getAllKeys();
    if (value !== null) {
      console.log(value);
      return value;
    }
  } catch (error) {
    // Handel error
  }
};

export {getUser, getContact, getKeys};
