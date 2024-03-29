import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

const DetailsInput = ({placeholder, value, editable, onChangeText}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      editable={editable}
      onChangeText={onChangeText}
    />
  );
};

export default DetailsInput;
