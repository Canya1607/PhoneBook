import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CREATE} from '../../constants/detailsTypes';
import styles from './styles';

const ContactCreate = ({navigation, userId}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          type: CREATE,
          name: null,
          surname: null,
          work: null,
          address: null,
          phone: null,
          userId: userId,
        })
      }>
      <View style={styles.container}>
        <Text style={styles.text}>Create new contact...</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCreate;
