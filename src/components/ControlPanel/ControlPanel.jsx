import './ControlPanel.scss';
import {audioMainButton, audioSecondButton, CONTROL_PANEL_ICONS as icons} from '../../data';
import SecondaryButton from './Buttons/SecondaryButton';
import PrimaryButton from './Buttons/PrimaryButton';
import Options from './Options/Options';
import {useDispatch, useSelector} from 'react-redux';
import {selectMode, selectPreferences} from '../../rdx/store';
import {MODES} from '../../data';
import {asyncTimer, setMode, setTimer} from '../../rdx/slices/modeSlice';
import {useState} from 'react';
import ReactHtmlParser from 'react-html-parser';
import {logicalPropertiesLinter} from '@ant-design/cssinjs';

export default function ControlPanel() {
    const {sounds, focusTime, shortBreakTime, longBreakTime} = useSelector(selectPreferences);
    const [visibleOptions, setVisibleOptions] = useState(false);
    const {id, timer} = useSelector(selectMode);
    const dispatch = useDispatch();

    const handleStartAndPause = () => {
        sounds && audioMainButton.play();

        if (!timer) {
            dispatch(asyncTimer());
        } else {
            dispatch(setTimer(null));
            clearInterval(timer);
        }
    };

    const handleVisibilityOptions = (e) => {
        sounds && audioSecondButton.play();
        setVisibleOptions((state) => !state);
        e.stopPropagation();
    };

    const handleNextMode = () => {
        sounds && audioSecondButton.play();
        if (id === 0) {
            dispatch(setMode({...MODES[1], timeInMinutes: shortBreakTime}));
        }
        if (id === 1) {
            dispatch(setMode({...MODES[2], timeInMinutes: longBreakTime}));
        }
        if (id === 2) {
            dispatch(setMode({...MODES[0], timeInMinutes: focusTime}));
        }
    };
    document.addEventListener('click', () => visibleOptions && setVisibleOptions(false));
    return (
        <>
            <div className="control-panel">
                <Options visible={visibleOptions} />
                <SecondaryButton
                    icon={
                        visibleOptions
                            ? ReactHtmlParser(icons.close)
                            : ReactHtmlParser(icons.options)
                    }
                    handlerClick={handleVisibilityOptions}
                />
                <PrimaryButton
                    icon={timer ? ReactHtmlParser(icons.pause) : ReactHtmlParser(icons.start)}
                    handlerClick={handleStartAndPause}
                />
                <SecondaryButton icon={ReactHtmlParser(icons.next)} handlerClick={handleNextMode} />
            </div>
        </>
    );
}
