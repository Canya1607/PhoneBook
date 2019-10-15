import React from 'react';
import {View, Text, TouchableOpacity, Linking, Platform} from 'react-native';
import styles from './styles';

const phone =
  Platform.OS === 'android' ? 'tel:+380964821833' : 'telprompt:+380964821833';

const Contact = ({navigation, name}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          name: name,
        })
      }
      onLongPress={() => Linking.openURL(phone)}>
      <View style={styles.contact}>
        <View style={styles.avatar} />
        <Text style={styles.contact_text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Contact;
