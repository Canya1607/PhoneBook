import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

const DetailsInput = ({placeholder}) => {
  return <TextInput style={styles.input} placeholder={placeholder} />;
};

export default DetailsInput;
