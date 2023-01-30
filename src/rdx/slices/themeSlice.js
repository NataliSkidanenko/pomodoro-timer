import {createSlice} from '@reduxjs/toolkit';
import {THEMES} from '../../data';

const initialState = THEMES.dark;

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (theme, action) => {
            theme = action.payload;
        },
    },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
