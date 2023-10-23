import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';
import {navigation} from '';

const SignedInScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //goto
  const goToSignedUp = () => {
    navigation.navigate('SignUp');
  };

  const connexion = async () => {
    try {
      console.log('Bonjour SignIn');

      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Errreurds SignIn', error);
    }
  };

  // inscription
  const Inscription = async () => {
    console.log('incription : ', email, password);

    try {
      if (email != '' && password != '') {
        console.log('Pas vide');
        const user = await firebase()
          .auth()
          .createUserWithEmailAndPassword(email, password);
        //enregistrement de l'utilisateur grâce a son uid dans la collection
        await firestore().auth().doc(user.uid).set({email: email});

        console.log('email', 'mot de passe');
      }
    } catch (error) {
      console.log('Errreur', error);
    }
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
      <Button title="Sign Up : Incription" onPress={() => goToSignedUp()} />
    </View>
  );
};

export default SignedInScreen;
