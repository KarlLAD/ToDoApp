import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {products} from './data';
import ItemLeboncoin from './ItemLeboncoin';
import leboncoinStyles from './leboncoinStyles';

const LeBonCoin = () => {
  return (
    <View style={leboncoinStyles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <ItemLeboncoin product={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default LeBonCoin;
