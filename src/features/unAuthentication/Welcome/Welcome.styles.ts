import {COLOR, FONT_SIZE} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 26,
  },
  title: {
    marginTop: 75,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.BIG,
    color: COLOR.PRIMARY,
  },
  describle: {
    fontSize: FONT_SIZE.NORMAL,
    color: COLOR.TEXT,
    textAlign: 'center',
    marginTop: 16,
  },
  loginButton: {
    marginTop: 65,
  },
  signUpButton: {
    fontWeight: '600',
    fontSize: FONT_SIZE.BIG16,
    color: COLOR.PRIMARY,
    marginTop: 21,
  },
});

export default styles;
