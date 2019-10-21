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

const phoneOS =
  Platform.OS === 'android' ? 'tel:+380964821833' : 'telprompt:+380964821833';

const Contact = ({navigation, contact, onDelete}) => {
  const {name, surname, work, address, phone} = contact;
  const callAlert = () => {
    Alert.alert(
      `Do you want to delete ${contact.name} ?`,
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: onDelete,
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          type: SHOW,
          name,
          surname,
          work,
          address,
          phone,
        })
      }
      //onLongPress={() => Linking.openURL(phoneOS)}
    >
      <View style={styles.container}>
        <View style={styles.contact}>
          <View style={styles.avatar} />
          <Text style={styles.contact_text}>{contact.name}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              type: EDIT,
              name,
              surname,
              work,
              address,
              phone,
            })
          }>
          <Image
            style={styles.edit}
            source={require('../../assets/images/edit.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => callAlert()}>
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
