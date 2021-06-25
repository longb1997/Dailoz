import React, {ReactElement} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';

interface CommonTextProps {
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
  },
});
