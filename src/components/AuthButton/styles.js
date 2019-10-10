import {StyleSheet} from 'react-native';
import size from '../../constants/size';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginLeft: size.Width * 0.09,
    width: size.Width * 0.58,
    borderRadius: 6,
    backgroundColor: '#2D3047',
  },
  text: {
    color: '#CCBBB7',
    fontSize: 18,
  },
});

export default styles;
