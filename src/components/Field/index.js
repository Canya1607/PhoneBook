import React from 'react';
import {View, Text} from 'react-native';
import Dividers from '../Divider';
import DetailsInput from '../DetailsInput';
import styles from './styles';

const Field = ({text, placeholder, value, editable}) => {
  return (
    <View style={styles.field}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.divider}>
        <Dividers.HeightDivider />
      </View>
      <View style={styles.input}>
        <DetailsInput
          placeholder={placeholder}
          value={value}
          editable={editable}
        />
      </View>
    </View>
  );
};

export default Field;
