import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import RoutePublic from './public/RoutePublic';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import RouteSecure from './secure/RouteSecure';

const AuthApp = () => {
  const [initialsing, setInitialsing] = useState(true);

  const [user, setUser] = useState();

  const onAuthStateChange = user => {
    setUser(user);
    if (initialsing) {
      setInitialsing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []);

  if (initialsing) return null;

  return (
    <>
      {!user ? (
        <NavigationContainer>
          <RoutePublic />
        </NavigationContainer>
      ) : (
        <RouteSecure />
      )}
    </>
  );
};

export default AuthApp;
