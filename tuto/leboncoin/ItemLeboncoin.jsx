import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import leboncoinStyles from './leboncoinStyles';

const ItemLeboncoin = ({product}) => {
  const goto = () => {
    console.log('product', product.id);
  };
  return (
    <TouchableOpacity style={leboncoinStyles.cardContainer} onPress={goto}>
      <ImageBackground
        source={{uri: product.thumbnail}}
        style={leboncoinStyles.cardImage}
        imageStyle={{borderRadius: 20}}>
        <View style={leboncoinStyles.favIcon}>
          <Icon name="favorite-border" size={30} color="#900" />
        </View>
      </ImageBackground>
      <View style={leboncoinStyles.containerTitlePrice}>
        <Text style={leboncoinStyles.title}>{product.title}</Text>
        <Text style={leboncoinStyles.price}>{product.price} €</Text>
      </View>
      <View style={leboncoinStyles.containerBrand}>
        <Text style={leboncoinStyles.brand}>{product.brand}</Text>
        <Text style={leboncoinStyles.brand}>{product.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemLeboncoin;
