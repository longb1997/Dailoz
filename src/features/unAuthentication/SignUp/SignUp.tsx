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
import {Image, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Yup from 'yup';

import styles from './SignUp.style';

const validate = Yup.object().shape({
  email: Yup.string().required('Email field is required'),
  password: Yup.string().required('Password field is required'),
});
const Screen = () => {
  const onSignUp = (values: any) => {
    console.log(values);
    NavigationService.navigate(APP_SCREEN.LOGIN);
  };
  const onSignIn = () => NavigationService.navigate(APP_SCREEN.REGISTER);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{
            username: 'username',
            email: 'email@email.com',
            password: 'password',
          }}
          validationSchema={validate}
          onSubmit={onSignUp}>
          {({values, setFieldValue, submitForm}) => {
            return (
              <View>
                <CommonText textStyle={styles.titleText}>Sign Up</CommonText>
                <CommonTextInput
                  placeholder="Username"
                  leftIcon={images.message}
                  value={values.username}
                  onChangeText={(text: string) => {
                    setFieldValue('username', text, false);
                  }}
                />
                <CommonTextInput
                  placeholder="Email Id"
                  leftIcon={images.lock}
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
                <CommonButton
                  text="Create"
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
        Have any account?
        <CommonText
          onPress={onSignIn}
          textStyle={{
            fontSize: FONT_SIZE.NORMAL,
            color: COLOR.TEXT,
            fontWeight: '600',
          }}>
          {' '}
          Sign In
        </CommonText>
      </CommonText>
    </SafeAreaView>
  );
};

export const SignUp = React.memo(Screen);
