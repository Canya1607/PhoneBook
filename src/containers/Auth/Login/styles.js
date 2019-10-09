import {StyleSheet} from 'react-native';
import size from '../../../constants/size';

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
    color: '#FCD6B5',
  },
});

export default styles;
