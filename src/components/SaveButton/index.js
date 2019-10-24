import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const SaveButton = ({text, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SaveButton;
