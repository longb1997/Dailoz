/* eslint-disable no-nested-ternary */
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';

import {Row} from '../Row';

const ButtonTabView = ({
  onPress,
  onLongPress,
  isFocused,
  options,
  icon,
}: any) => {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      style={{flex: 1, alignItems: 'center', paddingVertical: 14}}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Image
        source={icon}
        style={{
          alignSelf: 'center',
        }}
      />
      {isFocused && (
        <View
          style={{
            backgroundColor: '#5B67CA',
            position: 'absolute',
            width: 4,
            height: 4,
            borderRadius: 2,
            bottom: 5,
          }}
        />
      )}
    </Pressable>
  );
};

export const TabView = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  return (
    <Row rowStyle={styles.container}>
      {state.routes.map((route: any, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <ButtonTabView
            label={label}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            options={options}
            icon={isFocused ? route?.params?.active : route?.params?.idle}
          />
        );
      })}
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    borderRadius: 14,
    height: 60,
  },
});
