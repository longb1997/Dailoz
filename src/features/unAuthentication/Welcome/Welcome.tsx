import {images} from '@assets';
import {CommonButton, CommonText} from '@components';
import {APP_SCREEN, NavigationService} from '@navigations';
import React from 'react';
import {Image, View} from 'react-native';

import styles from './Welcome.styles';

const Screen = () => {
  const onPressLogin = () => NavigationService.navigate(APP_SCREEN.LOGIN);

  return (
    <View style={styles.container}>
      <Image source={images.splash} />
      <CommonText textStyle={styles.title}>Dailoz</CommonText>
      <CommonText textStyle={styles.describle}>
        Plan what you will do to be more organized for today, tomorrow and
        beyond
      </CommonText>
      <CommonButton
        text="Login"
        containerStyle={styles.loginButton}
        onPress={onPressLogin}
      />
      <CommonText textStyle={styles.signUpButton}>Sign Up </CommonText>
    </View>
  );
};

export const Welcome = React.memo(Screen);
