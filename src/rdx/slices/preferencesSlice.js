import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    visibility: false,
    darkTheme: true,
    sounds: true,
    focusTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
};

const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {
        toggleVisibility: (state) => {
            state.visibility = !state.visibility;
        },
        setFocusTime: (state, action) => {
            state.focusTime = action.payload;
        },
        setShortBreakTime: (state, action) => {
            state.shortBreakTime = action.payload;
        },
        setLongBreakTime: (state, action) => {
            state.longBreakTime = action.payload;
        },
        toggleDarkTheme: (state) => {
            state.darkTheme = !state.darkTheme;
        },
        toggleSounds: (state, action) => {
            state.sounds = !state.sounds;
        },
    },
});

export const {
    toggleVisibility,
    setFocusTime,
    setShortBreakTime,
    setLongBreakTime,
    toggleDarkTheme,
    toggleSounds,
} = preferencesSlice.actions;

export default preferencesSlice.reducer;
