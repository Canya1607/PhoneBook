import {StyleSheet} from 'react-native';
import size from '../../constants/size';

const styles = StyleSheet.create({
  divider: {
    width: size.Width * 0.95,
    height: 0.5,
    backgroundColor: '#A8A8A8',
  },
  full_divider: {
    width: size.Width,
    height: 0.5,
    backgroundColor: '#A8A8A8',
  },
  height_divider: {
    height: size.Height * 0.035,
    width: 0.5,
    backgroundColor: '#A8A8A8',
  },
  flex_divider: {
    flex: 1,
    width: size.Width,
    backgroundColor: '#F0F0F0',
  },
});

export default styles;
