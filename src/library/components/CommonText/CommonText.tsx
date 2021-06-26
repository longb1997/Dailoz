import {COLOR} from '@theme';
import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';

interface CommonTextProps extends TextProps {
  children: React.ReactNode;
  textStyle?: TextStyle | TextStyle[];
}

const Screen = ({children, textStyle, ...rest}: CommonTextProps) => {
  return (
    <Text style={[styles.commonStyle, textStyle]} {...rest}>
      {children}
    </Text>
  );
};

export const CommonText = React.memo(Screen);
const styles = StyleSheet.create({
  commonStyle: {
    fontFamily: 'Hind Siliguri',
    color: COLOR.TEXT,
  },
});
