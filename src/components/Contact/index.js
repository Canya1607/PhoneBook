import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Contact = ({navigation, name}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          name: name,
        })
      }
      onLongPress={() => alert('Call me')}>
      <View style={styles.contact}>
        <View style={styles.avatar} />
        <Text style={styles.contact_text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Contact;
