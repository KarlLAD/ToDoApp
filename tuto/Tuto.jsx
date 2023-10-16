import {ImageBackground, View, Text} from 'react-native';
import React from 'react';
import tutoStyles from './tutoStyles';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const Tuto = () => {
  return (
    <View style={tutoStyles.container}>
      <ImageBackground style={tutoStyles.Gbox}
                source={image}
                resizeMode="cover"
      >
        <View style={tutoStyles.box}>
          <View style={tutoStyles.box1} />
          <View style={tutoStyles.box2} />
          <View style={tutoStyles.box3} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Tuto;
