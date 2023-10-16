import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const send = async () => {
    console.log("C'est parti.", email, password);

    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('ERREUR', error);
    }
  };

  const handleSignIn = () => {};

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View>
      <Text>SignIn</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Se connecter" onPress={send} />
      <Button title="Créer un compte" onPress={goToSignUp} />
    </View>
  );
};

export default SignIn;
