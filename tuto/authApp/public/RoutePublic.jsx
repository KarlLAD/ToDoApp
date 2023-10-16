import {View, Text} from 'react-native';
import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RoutePublic = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default RoutePublic;
