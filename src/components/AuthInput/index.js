import React from 'react';
import {View, Image, TextInput} from 'react-native';
import styles from './styles';

const AuthInput = ({text, value, onChange}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/enter.png')} />
      <TextInput
        style={styles.input}
        value={value}
        placeholder={text}
        placeholderTextColor={'#e5dcdb'}
        onChange={onChange}
      />
    </View>
  );
};

export default AuthInput;
