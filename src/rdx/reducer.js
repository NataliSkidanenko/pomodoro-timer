// initialState
export const TOGGLE_THEME = 'toggleTheme';
export const CHOSE_RED = 'choseRed';
export const CHOSE_GREEN = 'choseGreen';
export const CHOSE_BLUE = 'choseBlue';
export const LIGHT = 'light';
export const DARK = 'dark';
export const RED = 'red';
export const BLUE = 'blue';
export const GREEN = 'green';

const initialState = {
    theme: DARK,
    color: RED,
};

// actions

export const toggleTheme = () => ({
    type: TOGGLE_THEME,
    payload: {light: LIGHT, dark: DARK},
});

export const choseRed = () => ({
    type: CHOSE_RED,
    payload: RED,
});

export const choseBlue = () => ({
    type: CHOSE_BLUE,
    payload: BLUE,
});

export const choseGreen = () => ({
    type: CHOSE_GREEN,
    payload: GREEN,
});

// reducer

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === LIGHT ? action.payload.dark : action.payload.light,
            };

        case CHOSE_RED:
            return {
                ...state,
                color: action.color,
            };

        case CHOSE_BLUE:
            return {
                ...state,
                color: action.color,
            };

        case CHOSE_GREEN:
            return {
                ...state,
                color: action.color,
            };

        default:
            return state;
    }
};

// selectors

export const selectTheme = (state) => state.theme;
export const selectColor = (state) => state.color;
