import {StyleSheet} from 'react-native';
import size from '../../constants/size';

const styles = StyleSheet.create({
  container: {
    width: size.Width * 0.85,
    margin: 4,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contact: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    width: size.Width * 0.14,
    height: size.Width * 0.14,
    borderRadius: size.Width * 0.07,
    marginRight: 32,
  },
  contact_text: {
    fontSize: 16,
  },
  call: {
    marginRight: 12,
  },
  edit: {
    marginRight: 12,
  },
  delete: {
    marginRight: 4,
  },
});

export default styles;
