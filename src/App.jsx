import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectColor, selectTheme, toggleTheme} from './rdx/reducer';
import Option from './components/ModeIndicator/ModeIndicator';
import {MODES, THEMES} from './data';

// const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function App() {
    const [mode, setMode] = useState(MODES[0]);
    const [theme, setTheme] = useState(THEMES.dark);
    const [color, setColor] = useState(mode.color);

    document.body.dataset.theme = `${theme}-${color}`;

    return (
        <div className="App">
            <div className="wrapper">
                <div className="container">
                    <Option img={mode.img} title={mode.title}></Option>
                </div>
            </div>
        </div>
    );
}

export default App;
