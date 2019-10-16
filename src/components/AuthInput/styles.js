import {StyleSheet} from 'react-native';
import size from '../../constants/size';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: size.Width * 0.19,
    textAlign: 'right',
    alignSelf: 'center',
    fontSize: 18,
  },
  input: {
    width: size.Width * 0.58,
    height: 36,
    padding: 6,
    paddingRight: 32,
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: '#000',
    marginLeft: 12,
  },
});

export default styles;
