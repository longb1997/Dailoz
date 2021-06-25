import {images} from '@assets';
import {CommonButton, CommonText, CommonTextInput} from '@components';
import {APP_SCREEN, NavigationService} from '@navigations';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
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
const Screen = (props: any) => {
  const {onLogin} = props;

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

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
              <>
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
              </>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const mapDispatch = {
  onLogin: actions.onLogin,
};
export const Login = connect(null, mapDispatch)(Screen);
