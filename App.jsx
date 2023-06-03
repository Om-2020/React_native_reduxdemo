import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator';
import { Provider } from 'react-redux';
import { mystore } from './Redux/store';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(mystore);

const App = () => {
  return (
    <Provider store={mystore}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator/>
      </PersistGate>
    </Provider>

  )
}

export default App;