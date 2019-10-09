import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const AuthButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthButton;
