import {useSelector} from 'react-redux';
import ModeIndicator from './components/ModeIndicator/ModeIndicator';
import Timer from './components/Timer/Timer';
import ControlPanel from './components/ControlPanel/ControlPanel';
import {selectMode, selectTheme} from './rdx/store';
import {setStyleTheme} from './helpers';
import GradientAnimation from './components/GradientAnimation/GradientAnimation';

// const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function App() {
    const {color, title, img, timeInMinutes: minutes, seconds, timer} = useSelector(selectMode);
    const theme = useSelector(selectTheme);
    setStyleTheme(theme, color);

    return (
        <div className="App">
            <div className="wrapper">
                <div className="container">
                    <GradientAnimation />
                    <ModeIndicator img={img} title={title}></ModeIndicator>
                    <Timer minutes={minutes} seconds={seconds} />
                    <ControlPanel />
                </div>
            </div>
        </div>
    );
}

export default App;
