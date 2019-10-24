/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Platform,
  Image,
  Alert,
} from 'react-native';
import {EDIT, SHOW} from '../../constants/detailsTypes';
import styles from './styles';

const phoneOS = Platform.OS === 'android' ? 'tel:' : 'tel://';

const Contact = ({navigation, contact, onDelete}) => {
  const {id, userId, avatar, name, surname, work, address, phone} = contact;

  const askDelete = () =>
  {
    Alert.alert(`Do you want to delete ${contact.name} ?`, '', [
        {
          text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel',
        },
        {
          text: 'OK', onPress: onDelete, style: 'destructive',
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          type: SHOW,
          id, userId,
          avatar, name, surname, work, address, phone,
        })
      }
      onLongPress={() =>
        Linking.openURL(`${phoneOS}${phone}`)
      }>
      <View style={styles.container}>
        <View style={styles.contact}>
          <Image
            style={styles.avatar}
            source={
              avatar
                ? avatar
                : require('../../assets/images/avatar_default.png')
            }
          />
          <Text style={styles.contact_text}>{contact.name}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              type: EDIT,
              id, userId,
              avatar, name, surname, work, address, phone,
            })
          }>
          <Image
            style={styles.edit}
            source={require('../../assets/images/edit.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => askDelete()}>
          <Image
            style={styles.delete}
            source={require('../../assets/images/delete.png')}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Contact;
