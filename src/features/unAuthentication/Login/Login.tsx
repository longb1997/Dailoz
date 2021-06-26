import {images} from '@assets';
import {
  CommonButton,
  CommonText,
  CommonTextInput,
  Divider,
  Row,
} from '@components';
import {APP_SCREEN, NavigationService} from '@navigations';
import {COLOR, FONT_SIZE} from '@theme';
import {Formik} from 'formik';
import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import * as Yup from 'yup';

import styles from './Login.style';
import {actions} from './redux/reducer';

const validate = Yup.object().shape({
  email: Yup.string().required('Email field is required'),
  password: Yup.string().required('Password field is required'),
});
const Screen = () => {
  const onSignin = (values: any) => {
    console.log(values);
    // onLogin();
    NavigationService.navigate(APP_SCREEN.REGISTER);
  };
  const onForgotPassword = () =>
    NavigationService.navigate(APP_SCREEN.REGISTER);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{
            email: 'email@email.com',
            password: 'password',
          }}
          validationSchema={validate}
          onSubmit={onSignin}>
          {({values, setFieldValue, submitForm}) => {
            return (
              <View>
                <CommonText textStyle={styles.titleText}>Login</CommonText>
                <CommonTextInput
                  placeholder="Email ID or Username"
                  leftIcon={images.message}
                  value={values.email}
                  onChangeText={(text: string) => {
                    setFieldValue('email', text, false);
                  }}
                />
                <CommonTextInput
                  placeholder="Password"
                  leftIcon={images.lock}
                  rightIcon={images.hide}
                  value={values.password}
                  onChangeText={(text: string) => {
                    setFieldValue('password', text, false);
                  }}
                  secureTextEntry={true}
                />
                <Pressable
                  onPress={onForgotPassword}
                  style={styles.forgotPassword}>
                  <CommonText textStyle={styles.forgotPasswordText}>
                    Forgot Password ?
                  </CommonText>
                </Pressable>
                <CommonButton
                  text="Login"
                  containerStyle={styles.loginButton}
                  onPress={submitForm}
                />

                <Row rowStyle={{marginTop: 64, marginBottom: 30}}>
                  <Divider />
                  <CommonText
                    textStyle={{
                      marginHorizontal: 22,
                      color: COLOR.PLACEHOLDER,
                    }}>
                    or with
                  </CommonText>
                  <Divider />
                </Row>

                <Row rowStyle={{justifyContent: 'center'}}>
                  <Image source={images.google} style={{marginRight: 16}} />
                  <Image source={images.facebook} />
                </Row>
              </View>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
      <CommonText
        textStyle={{
          textAlign: 'center',
          justifyContent: 'flex-end',
          fontSize: FONT_SIZE.NORMAL,
        }}>
        Don't have an account?
        <CommonText
          onPress={onForgotPassword}
          textStyle={{
            fontSize: FONT_SIZE.NORMAL,
            color: COLOR.TEXT,
            fontWeight: '600',
          }}>
          {' '}
          Sign Up
        </CommonText>
      </CommonText>
    </SafeAreaView>
  );
};

const mapDispatch = {
  onLogin: actions.onLogin,
};
export const Login = connect(null, mapDispatch)(Screen);
