import {combineReducers, configureStore } from "@reduxjs/toolkit";

import Todoreducer from '../Redux/Todoslice';
import FetchProductsReducer from '../Redux/FetchProductsSlice';

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    persistReducer,
} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage:AsyncStorage
};

const rootReducer = combineReducers({
    todo:Todoreducer,
    products: FetchProductsReducer,
});

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const mystore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

});
