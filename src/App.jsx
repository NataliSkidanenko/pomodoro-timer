import {useSelector} from 'react-redux';
import ModeIndicator from './components/ModeIndicator/ModeIndicator';
import Timer from './components/Timer/Timer';
import ControlPanel from './components/ControlPanel/ControlPanel';
import {selectMode, selectPreferences} from './rdx/store';
import {setStyleTheme} from './helpers';
import GradientAnimation from './components/GradientAnimation/GradientAnimation';
import Preferences from './components/Preferences/Preferences';

// const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function App() {
    const {color, title, img, timeInMinutes: minutes, seconds} = useSelector(selectMode);
    const {darkTheme} = useSelector(selectPreferences);
    setStyleTheme(darkTheme === true ? 'dark' : 'light', color);

    return (
        <div className="App">
            <Preferences />
            <div className="wrapper">
                <div className="container">
                    {darkTheme && <GradientAnimation />}
                    <ModeIndicator img={img} title={title}></ModeIndicator>
                    <Timer minutes={minutes} seconds={seconds} />
                    <ControlPanel />
                </div>
            </div>
        </div>
    );
}

export default App;
