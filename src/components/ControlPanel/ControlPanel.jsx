import './ControlPanel.scss';
import {audioMainButton, audioSecondButton, CONTROL_PANEL_ICONS as icons} from '../../data';
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';
import Options from './Options/Options';
import {useDispatch, useSelector} from 'react-redux';
import {selectMode} from '../../rdx/store';
import {MODES} from '../../data';
import {asyncTimer, setMode, setTimer} from '../../rdx/slices/modeSlice';
import {useState} from 'react';

export default function ControlPanel() {
    const [visibleOptions, setVisibleOptions] = useState(false);
    const {id, timer} = useSelector(selectMode);
    const dispatch = useDispatch();

    const handleStartAndPause = () => {
        audioMainButton.play();
        if (!timer) {
            dispatch(asyncTimer());
        } else {
            dispatch(setTimer(null));
            clearInterval(timer);
        }
    };

    const handleVisibilityOptions = () => {
        audioSecondButton.play();
        setVisibleOptions((state) => !state);
    };

    const handleNextMode = () => {
        audioSecondButton.play();
        for (let i = 0; i < MODES.length; i++) {
            if (MODES[i].id === id) {
                if (i === MODES.length - 1) {
                    dispatch(setMode(MODES[0]));
                }
                dispatch(setMode(MODES[i + 1]));
            }
        }
    };

    return (
        <>
            <div className="control-panel">
                <Options visible={visibleOptions} />
                <SecondaryButton
                    icon={visibleOptions ? icons.close : icons.options}
                    handlerClick={handleVisibilityOptions}
                />
                <PrimaryButton
                    icon={timer ? icons.pause : icons.start}
                    handlerClick={handleStartAndPause}
                />
                <SecondaryButton icon={icons.next} handlerClick={handleNextMode} />
            </div>
        </>
    );
}
