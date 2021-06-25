import {COLOR, FONT_SIZE} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 35,
  },
  titleText: {
    fontSize: FONT_SIZE.VERY_BIG,
    color: COLOR.PRIMARY,
    fontWeight: '600',
    lineHeight: 58,
    marginBottom: 42,
  },
  loginButton: {
    marginTop: 55,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 16,
  },
  forgotPasswordText: {
    color: COLOR.PRIMARY,
    fontSize: FONT_SIZE.SMALL,
    lineHeight: 17,
  },
});
export default styles;
