import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';

interface IRowProps {
  rowStyle?: ViewStyle;
  children: React.ReactNode;
}

export const Row = ({children, rowStyle, ...rest}: IRowProps) => {
  return (
    <View style={[styles.container, rowStyle]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
