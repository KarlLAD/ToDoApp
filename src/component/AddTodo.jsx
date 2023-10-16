import { View, Text } from 'react-native'
import { TextInput } from 'react-native'
import { useState } from 'react'

import React from 'react'
import styles from '../styles'
import firestore from '@react-native-firebase/firestore'

const AddTodo = () => {

    const [task, setTask] = useState('')

    const send = (value) => {

        console.log('send', value)
        firestore().collection('Todo').add({
            task: value,
            status: false,
            dateins: Date.now(),
        })

        setTask("")

    }

    return (
        <View>

        <TextInput 
            style={styles.addInput}
            value={task}
            onChangeText={text=>setTask(text)}
            onSubmitEditing={(value) => send(value.nativeEvent.text)}
        />

        </View>
    )
}

export default AddTodo