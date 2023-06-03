import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { deleteTodo } from '../../Redux/Todoslice';
import { TaskAbortError } from '@reduxjs/toolkit';
import {fetchProducts } from '../../Redux/FetchProductsSlice';

const TodoList = ({ navigation }) => {

    //const todos = useSelector(state => state.todo.data)
    //console.log(todos);
    const products = useSelector(state =>state.products);
    console.log(products);
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1 }}>

           {/* <FlatList
                data={todos}
                renderItem={({ item, index }) => {
                    return <View style={{ flex: 1, }}>

                        <Text >{item.title}</Text>
                        <Text >{item.description}</Text>

                        <Text style={{
                            width: 50,
                            height: 30,
                            color: 'red',
                            position: 'absolute',
                            right: 10,
                            top:2
                        }} onPress={() => {
                            dispatch(deleteTodo(index));
                        }}>Delete</Text>

                        <Text style={{
                            width: 50,
                            height: 30,
                            color: 'red',
                            position: 'absolute',
                            right: 10,
                            top:19
            
                        }} onPress={() => {
                            navigation.navigate('AddTodoList',{
                                type:'edit',
                                data: item,
                                index:index
                            });
                            
                        }}>Edit</Text>

                    </View>
                }}
            />*/}
            <TouchableOpacity style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: 'black',
                position: 'absolute',
                bottom: 20,
                right: 20,
                justifyContent: 'center',
                alignItems: 'center'
            }}
                onPress={() => {
                    //Alert.alert("Om");
                    /*navigation.navigate('AddTodoList',{
                        type:'add'
                    });*/
                    dispatch(fetchProducts());
                }}
            >
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: '500',
                    alignSelf: 'center'
                }}>+</Text>
            </TouchableOpacity>

        </View>
    )
}

export default TodoList;
