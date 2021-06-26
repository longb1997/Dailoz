import {COLOR} from '@theme';
import React from 'react';
import {View} from 'react-native';

interface IDividerProps {
  color?: string;
  width?: number;
}

const Screen = ({color = COLOR.BORDER, width = 1}: IDividerProps) => {
  return (
    <View
      style={{flex: 1, borderBottomColor: color, borderBottomWidth: width}}
    />
  );
};

export const Divider = React.memo(Screen);
