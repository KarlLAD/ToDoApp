import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const SignedUpScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //goto
  const goToSignedIn = () => {
    navigation.navigate('SignIn');
  };

  // inscription
  const Inscription = () => {
    console.log('incription : ', email, password);
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in : Validez !" onPress={() => Inscription()} />
      <Button title="Sign Up : Incription" onPress={() => goToSignedIn()} />
    </View>
  );
};

export default SignedUpScreen;
