import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import { useEffect, useState } from 'react'

import React from 'react'
import firestore from '@react-native-firebase/firestore'
import ItemTodo from './ItemTodo'

const ListerTodo = () => {

    /*
    ***
    ** Initialisation de tout (todos et loading)
    ***
    */

    // Initialisation des données dans le state
    const [todos, setTodos] = useState([])

    // Initialisation des states 
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        console.log('lister')

        // Abonnement aux évolutions des évéènements dans la collection 
        firestore().collection('Todo').onSnapshot(querySnapshot=>{
            
            //console.log('query Snapshot', querySnapshot)

            const dataTodos = []

            // Boucle sur les données 
            querySnapshot.forEach(doc=>{

                // Lecture du document
                // console.log(doc.data())

                dataTodos.push({id:doc.id,
                                ...doc.data()
                                })

            })
            setTodos(dataTodos)

            // Arrêt du chargement 
            loading && setLoading(false)

        })

    }, [])
    

    return (
        <View>

        {loading ? <ActivityIndicator animating={true} />
                : <FlatList 
                    data={todos}
                    renderItem={({item})=> < ItemTodo todo={item} />}
                    keyExtractor={item => item.id}
                />}

        </View>
    )
}

export default ListerTodo