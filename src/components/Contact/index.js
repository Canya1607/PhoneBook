import React from 'react';
import {View, Text, TouchableOpacity, Linking, Platform} from 'react-native';
import styles from './styles';

const phone =
  Platform.OS === 'android' ? 'tel:+380964821833' : 'telprompt:+380964821833';

const Contact = ({navigation, contact}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          name: contact.name,
          surname: contact.surname,
          work: contact.work,
          address: contact.address,
          phone: contact.phone,
        })
      }
      onLongPress={() => Linking.openURL(phone)}>
      <View style={styles.contact}>
        <View style={styles.avatar} />
        <Text style={styles.contact_text}>{contact.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Contact;
