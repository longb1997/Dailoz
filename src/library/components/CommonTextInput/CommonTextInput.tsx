import {COLOR, FONT_SIZE} from '@theme';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';

import {Row} from '../Row';

interface ICommonTextInputProp extends TextInputProps {
  placeholder?: string;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
}
const Screen = ({
  placeholder = 'Placeholder',
  leftIcon,
  rightIcon,
  ...rest
}: ICommonTextInputProp) => {
  return (
    <Row rowStyle={styles.container}>
      {leftIcon && <Image source={leftIcon} style={styles.leftIcon} />}
      <TextInput style={styles.input} placeholder={placeholder} {...rest} />
      {rightIcon && <Image source={rightIcon} style={styles.rightIcon} />}
    </Row>
  );
};

export const CommonTextInput = React.memo(Screen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: COLOR.BORDER,
    borderBottomWidth: 1,
    marginTop: 32,
  },
  leftIcon: {
    width: 24,
    height: 24,
    marginRight: 13,
    resizeMode: 'center',
    marginBottom: 19,
  },
  rightIcon: {
    width: 24,
    height: 24,
    resizeMode: 'center',
    marginBottom: 15,
  },
  input: {
    fontFamily: 'Hind Siliguri',
    fontSize: FONT_SIZE.BIG16,
    marginBottom: 15,
    flex: 1,
  },
});
