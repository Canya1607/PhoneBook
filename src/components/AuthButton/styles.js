import {StyleSheet} from 'react-native';
import size from '../../constants/size';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginLeft: size.Width * 0.02,
    width: size.Width * 0.675,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  text: {
    color: '#f0f0f0',
    fontSize: 18,
  },
});

export default styles;
