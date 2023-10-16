import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
  };

  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View>
      <Text>SignUp</Text>
      <TextInput
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="S'inscrire" onPress={goToSignIn} />
      <Button title="Déjà un compte ? Se connecter" onPress={goToSignIn} />
    </View>
  );
};

export default SignUp;
