import {StyleSheet} from 'react-native';
import size from '../../constants/size';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    width: size.Width * 0.19,
    textAlign: 'right',
    alignSelf: 'center',
    fontSize: 18,
    // color: '#8A8A8F',
  },
  input: {
    width: size.Width * 0.58,
    height: 36,
    padding: 6,
    paddingRight: 32,
    borderWidth: 0.5,
    borderRadius: 6,
    // borderColor: 'gray',
    marginLeft: 7,
  },
});

export default styles;
