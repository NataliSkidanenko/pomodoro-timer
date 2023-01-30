import {configureStore} from '@reduxjs/toolkit';
import modeReducer from './slices/modeSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
    reducer: {
        mode: modeReducer,
        theme: themeReducer,
    },
});

export const selectMode = (state) => state.mode;
export const selectTheme = (state) => state.theme;
