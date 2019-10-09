import React from 'react';
import {View, Image, TextInput} from 'react-native';
import styles from './styles';

const AuthInput = ({text, value, placeholderOn, onBlur, onFocus, onChange}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/enter.png')} />
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholderOn === true ? text : null}
        placeholderTextColor={'#CCBBB7'}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </View>
  );
};

export default AuthInput;
