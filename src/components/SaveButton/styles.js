import {StyleSheet} from 'react-native';
import size from '../../constants/size';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingTop: 32,
  },
  button: {
    padding: 8,
    alignItems: 'center',
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
