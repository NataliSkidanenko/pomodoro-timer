import {createSlice} from '@reduxjs/toolkit';
import {MODES} from '../../data';

const initialState = {
    ...MODES[0],
    initialTimeInMinutes: MODES[0].timeInMinutes,
    seconds: 0,
    timer: null,
};

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode: (mode, action) => {
            mode.title = action.payload.title;
            mode.id = action.payload.id;
            mode.color = action.payload.color;
            mode.img = action.payload.img;
            mode.initialTimeInMinutes = action.payload.timeInMinutes;
            mode.timeInMinutes = action.payload.timeInMinutes;
            mode.seconds = 0;

            clearInterval(mode.timer);
            mode.timer = null;
        },
        setInitialTime: (mode, action) => {
            mode.initialTimeInMinutes = action.payload;
        },
        countTime: (mode, action) => {
            if (mode.timeInMinutes === 0 && mode.seconds === 0) {
                mode.timeInMinutes = mode.initialTimeInMinutes;

                clearInterval(action.payload);
                mode.timer = null;
            } else {
                if (mode.seconds === 0) {
                    mode.seconds = 59;
                    mode.timeInMinutes = mode.timeInMinutes - 1;
                } else {
                    mode.seconds = mode.seconds - 1;
                }
            }
        },
        setTimer: (mode, action) => {
            mode.timer = action.payload;
        },
    },
});

export const {setMode, countTime, setTimer, setInitialTime} = modeSlice.actions;

export const asyncTimer = () => (dispatch) => {
    const timer = setInterval(() => {
        dispatch(countTime(timer));
    }, 1000);
    dispatch(setTimer(timer));
};

export default modeSlice.reducer;
