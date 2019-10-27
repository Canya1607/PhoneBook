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
  },
  input: {
    width: size.Width * 0.58,
    // height: 40,
    padding: 8,
    paddingRight: 32,
    borderWidth: 0.5,
    borderRadius: 6,
    borderColor: '#000',
    marginLeft: 12,
    fontSize: 17,
  },
});

export default styles;
