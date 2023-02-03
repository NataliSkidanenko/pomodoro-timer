import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import modeReducer from './slices/modeSlice';
import themeReducer from './slices/themeSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    mode: modeReducer,
    theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export const selectMode = (state) => state.mode;
export const selectTheme = (state) => state.theme;
