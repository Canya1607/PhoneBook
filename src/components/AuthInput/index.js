import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const AuthInput = ({text, placeholder, value, onChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </View>
  );
};

export default AuthInput;
