import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import modeReducer from './slices/modeSlice';
import preferencesReducer from './slices/preferencesSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    mode: modeReducer,
    preferences: preferencesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export const selectMode = (state) => state.mode;
export const selectPreferences = (state) => state.preferences;
