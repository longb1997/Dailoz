import {COLOR, FONT_SIZE} from '@theme';
import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {CommonText} from '../CommonText';

interface ICommonButtonProps extends PressableProps {
  text: string;
  textStyles?: TextStyle | TextStyle[];
  containerStyle?: ViewStyle;
}

const Screen = ({
  text,
  textStyles,
  containerStyle,
  ...rest
}: ICommonButtonProps) => {
  return (
    <Pressable style={[styles.container, containerStyle]} {...rest}>
      <CommonText textStyle={[styles.text, textStyles] as any}>
        {text}
      </CommonText>
    </Pressable>
  );
};

export const CommonButton = React.memo(Screen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 14,
    width: '100%',
  },
  text: {
    fontWeight: '600',
    fontSize: FONT_SIZE.BIG16,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 15,
  },
});
