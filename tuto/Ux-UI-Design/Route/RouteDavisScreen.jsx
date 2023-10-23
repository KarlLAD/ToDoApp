import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Design from '../Design';
import ProfileScreen from '../private/ProfileScreen';
import SignedInScreen from '../public/SignedInScreen';
import SignedUpScreen from '../public/SignedUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {resetUser, setUser} from '../../../redux/User';

const RouteDavisScreen = () => {
  const [SignedIn, setSignedIn] = useState();

  const Stack = createNativeStackNavigator();

  const [initializing, setInitializing] = useState(false);

  //const [user, setUser] = useState();

  // change l'état de l'utilisateur
  const onChangeUser = user => {
    // setUser(user);
    if (!user) {
      dispatch(resetUser());
    } else {
      dispatch(setUser(user.uid));
    }
  };

  const user = useSelector(state => state.user);

  const dispatch = useDispatch();
  //
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onChangeUser);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  //   if (!user) {
  //     return (
  //       <View>
  //         <Text>Login : Vous êtes connectés</Text>
  //       </View>
  //     );
  //   } else {
  //     return (
  //       <View>
  //         <Text>Not Login : Vous n'êtes pas connectés</Text>
  //       </View>
  //     );
  //   }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {SignedIn ? (
          <>
            <Stack.Screen name="Home" component={Design} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignedInScreen} />
            <Stack.Screen name="SignUp" component={SignedUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteDavisScreen;
