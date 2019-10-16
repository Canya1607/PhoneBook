import {StyleSheet} from 'react-native';
import size from '../../constants/size';

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: size.Width * 0.05,
  },
  text: {
    marginVertical: 20,
    fontSize: 16,
  },
  divider: {
    position: 'absolute',
    marginLeft: size.Width * 0.32,
  },
  input: {
    position: 'absolute',
    marginLeft: size.Width * 0.35,
    width: size.Width * 0.57,
  },
});

export default styles;
