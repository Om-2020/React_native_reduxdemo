
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { addTodo, updateTodo } from '../../Redux/Todoslice';

import { useDispatch } from 'react-redux';


const AddTodoList = ({ navigation, route }) => {

    const [title, settitle] = route.params.type == 'edit' ? useState(route.params.data.title):useState('');
    const [description, setdescription] = route.params.type == 'edit' ? useState(route.params.data.description) : useState('');
    const dispatch = useDispatch();

    
    
    return (

        <View style={{ flex: 1 }}>
            <TextInput placeholder='Title'

                value={title}
                onChangeText={text => {
                    settitle(text);
                }}

                style={{
                    marginTop: 50,
                    width: '90%',
                    height: 50,
                    borderRadius: 25,
                    borderWidth: 2,
                    marginLeft: 20,
                    borderColor: 'red',

                }}>
            </TextInput>
            <TextInput placeholder='Description'

                value={description}
                onChangeText={text => {
                    setdescription(text);
                }}

                style={{
                    width: '90%',
                    height: 120,
                    borderRadius: 25,
                    borderWidth: 3,
                    marginLeft: 20,
                    marginTop: 30,
                    borderColor: 'red',
                }}>
            </TextInput>

            <TouchableOpacity style={{
                width: '70%',
                height: 50, borderRadius: 25, backgroundColor: 'black', marginLeft: 64,
                marginTop: 50, justifyContent: 'center', alignItems: 'center'
            }}
                onPress={() => {

                    if (route.params.type == 'edit') {
                        dispatch(updateTodo({ title: title, description: description, index: route.params.index }))
                    }
                    else {
                        dispatch(addTodo({ title: title, description: description }))
                    }
                    navigation.goBack();
                }}
            >
                <Text style={{
                    color: 'white',
                    alignSelf: 'center', fontSize: 17, fontWeight: '600'
                }}>Add Item</Text>

            </TouchableOpacity>

        </View>

    )
}

export default AddTodoList;

