import AsyncStorage from '@react-native-community/async-storage';

const removeUser = async () => {
  console.log('removeUser()');
  try {
    await AsyncStorage.removeItem('users');
  } catch (error) {
    //Handling error
  }
};

export {removeUser};
