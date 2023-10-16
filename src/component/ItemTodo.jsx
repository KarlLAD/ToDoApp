import {View, Text} from 'react-native';
import {Button} from 'react-native';

import React from 'react';
import firestore from '@react-native-firebase/firestore';

const ItemTodo = ({todo}) => {
  const supprimer = () => {
    firestore().collection('Todo').doc(todo.id).delete();
  };

  const realiser = () => {
    firestore().collection('Todo').doc(todo.id).update({
      status: !todo.status,
    });
  };

  return (
    <View
      style={{
        height: 50,
        width: 350,
        backgroundColor: '#fff',
        margin: 10,
        flexDirection: 'row',
      }}>
      <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
        {todo.status ? (
          <Text style={{textDecorationLine: 'line-through'}}>{todo?.task}</Text>
        ) : (
          <Text>{todo?.task}</Text>
        )}
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Del" onPress={supprimer} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Upd" onPress={realiser} />
      </View>
    </View>
    // <View>
    // {todo.status ? <Text style={{textDecorationLine:'line-through'}}>{todo?.task}</Text>
    //                 : <Text>{todo?.task}</Text>
    //                 }
    // <Button title='Del' onPress={supprimer} />
    // <Button title='Upd' onPress={realiser} />
    // </View>
  );
};

export default ItemTodo;
