import {StyleSheet} from 'react-native';
import size from '../../constants/size';

const styles = StyleSheet.create({
  contact: {
    width: size.Width * 0.85,
    margin: 4,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
  },
  avatar: {
    width: size.Width * 0.14,
    height: size.Width * 0.14,
    borderRadius: size.Width * 0.07,
    marginRight: 32,
    backgroundColor: 'green',
  },
  contact_text: {
    fontSize: 16,
  },
});

export default styles;
