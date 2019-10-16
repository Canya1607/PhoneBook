import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

const DetailsInput = ({placeholder, value}) => {
  return (
    <TextInput style={styles.input} placeholder={placeholder} value={value} />
  );
};

export default DetailsInput;
