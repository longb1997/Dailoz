// import { ModalLoading } from '@components';
// import {showLoading, stopLoad} from '@loading/actions';
import {NavigationContainer} from '@react-navigation/native';
import {RootState} from '@store';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import {navigationRef} from './refNavigator';
import {RootNavigation} from './RootNavigator';

function App() {
  const {token} = useSelector((x: RootState) => x.app);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <RootNavigation token={token} />
        <FlashMessage position="top" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export const AppContainer = React.memo(App);
