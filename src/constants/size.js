import {Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const contactHeight = 24 + Width * 0.14;

export default {
  Width,
  Height,
  contactHeight,
};
