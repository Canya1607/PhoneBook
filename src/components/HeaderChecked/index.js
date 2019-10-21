import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const HeaderChecked = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.headerRight}
        source={require('../../assets/images/checked.png')}
      />
    </TouchableOpacity>
  );
};

export default HeaderChecked;
