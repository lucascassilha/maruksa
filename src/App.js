import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

import { AdMobInterstitial } from 'react-native-admob';

import { store, persistor } from '~/store/index';

import Routes from './routes';

AdMobInterstitial.setAdUnitID('ca-app-pub-7615541994083029/3957454243');
AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

function App() {
  OneSignal.init('3a5cc85d-1eb6-4169-bfee-920ecfd410d0', {
    kOSSettingsKeyAutoPrompt: true,
  });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
