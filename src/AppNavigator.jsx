import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import TodoList from './screens/TodoList';
import AddTodoList from './screens/AddTodoList';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="TodoList"
          component={TodoList}
          options={{
            headerShown: false,
          }}

        />
        <Stack.Screen
          name="AddTodoList"
          component={AddTodoList}

        />
      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default AppNavigator;