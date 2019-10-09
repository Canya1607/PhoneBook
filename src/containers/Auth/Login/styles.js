import {StyleSheet, Platform} from 'react-native';
import size from '../../../constants/size';

const margin = Platform.OS === 'android' ? 24 : null;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#659DBD',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  phonebook: {
    marginTop: size.Height * 0.2,
    marginBottom: size.Height * 0.08,
    width: size.Width * 0.25,
    height: size.Width * 0.25,
  },
  bottom_text: {
    marginBottom: margin,
    color: '#FCD6B5',
  },
});

export default styles;
