import AsyncStorage from '@react-native-community/async-storage';

const updateContact = async contactObj => {
  console.log('%cupdateContact()', 'color: #ff0000');

  try {
    const data = await AsyncStorage.getItem('contacts');
    if (data != null) {
      const contacts = JSON.parse(data);
      const newContacts = [];
      contacts.map(x => {
        if (x.id === contactObj.id) {
          newContacts.push(contactObj);
        } else {
          newContacts.push(x);
        }
      });
      await AsyncStorage.setItem('contacts', JSON.stringify(newContacts));
    }
  } catch (error) {
    // Error retrieving data
    console.log('%cUPDATE CONTACT ERROR', 'color: #ff0000');
    console.log(error);
  }
};

export {updateContact};
