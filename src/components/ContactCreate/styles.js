import {StyleSheet} from 'react-native';
import size from '../../constants/size';

const styles = StyleSheet.create({
  container: {
    width: size.Width * 0.85,
    margin: 4,
    marginTop: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default styles;
