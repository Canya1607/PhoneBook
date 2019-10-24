import AsyncStorage from '@react-native-community/async-storage';
import {getUsers, getContacts, getContactsById} from './GET';

const removeUser = async id => {
  console.log('%cremoveUser()', 'color: #ff0000');

  if (id) {
    try {
      const users = await getUsers();
      if (users) {
        const newUsers = [];
        users.map((x, index) => {
          if (index !== id - 1) {
            newUsers.push(x);
          }
        });
        await AsyncStorage.setItem('users', JSON.stringify(newUsers));
      } else {
        return null;
      }
    } catch (error) {
      console.log('%cREMOVE USER ERROR', 'color: #ff0000');
      console.log(error);
    }
  } else {
    return null;
  }
};

/**
 * Pass user Id as an argument
 */
const removeContacts = async id => {
  console.log('%cremoveContact()', 'color: #ff0000');

  if (id) {
    try {
      const contacts = await getContacts();
      if (contacts) {
        const newContacts = [];
        contacts.map((x, index) => {
          if (index !== id - 1) {
            newContacts.push(x);
          }
        });
        await AsyncStorage.setItem('contacts', JSON.stringify(newContacts));
      } else {
        return null;
      }
    } catch (error) {
      console.log('%cREMOVE CONTACT ERROR', 'color: #ff0000');
      console.log(error);
    }
  } else {
    return null;
  }
};

/**
 * @param {*} { id: "c34sdf3", userId: 1, name: "NAME", surname: "SURNAME", work: "WORK", address: "ADDRESS", phone: "PHONE"}
 */
const removeContact = async contactObj => {
  console.log('%cremoveContact()', 'color: #00ff00');
  if (!contactObj) {
    return null;
  }
  try {
    const contacts = await getContacts();
    const newContacts = [];
    contacts.map(x => {
      if (JSON.stringify(x) !== JSON.stringify(contactObj)) {
        newContacts.push(x);
      }
    });

    await AsyncStorage.setItem('contacts', JSON.stringify(newContacts));
    await getContactsById(contactObj.userId);
  } catch (error) {
    console.log('%cREMOVE CONTACT ERROR', 'color: #ff0000');
    console.log(error);
  }
};

/**
 * Clear all data in Storage. To access pass an Author name as an argument
 */
const _clearAll = Author => {
  if (Author === 'Olexandr') {
    AsyncStorage.clear();
  } else {
    console.log('Incorrect author');
  }
};

export {removeUser, removeContacts, removeContact, _clearAll};
