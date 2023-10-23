import {View, Text} from 'react-native';

import React from 'react';
import Todo from './src/Todo';
import Tuto from './tuto/Tuto';
import LeBonCoin from './tuto/leboncoin/LeBonCoin';
import AuthApp from './tuto/authApp/AuthApp';
import Design from './tuto/Ux-UI-Design/Design';
import RouteDavisScreen from './tuto/Ux-UI-Design/Route/RouteDavisScreen';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    // <AuthApp />
    // <Design />
    // provider
    <Provider store={store}>
      <RouteDavisScreen />
    </Provider>
  );
};

export default App;
