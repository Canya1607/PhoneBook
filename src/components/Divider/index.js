/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Divider = () => {
  return (
    <View style={{alignItems: 'flex-end'}}>
      <View style={styles.divider} />
    </View>
  );
};

const FullDivider = () => {
  return <View style={styles.full_divider} />;
};

const HeightDivider = () => {
  return <View style={styles.height_divider} />;
};

const FlexDivider = () => {
  return <View style={styles.flex_divider} />;
};

export default {
  Divider,
  FullDivider,
  HeightDivider,
  FlexDivider,
};
