import './Preferences.scss';
import {ConfigProvider, InputNumber, Switch} from 'antd';
import ReactHtmlParser from 'react-html-parser';
import {MODES, PREFERENCES_ICONS} from '../../data';
import {useDispatch, useSelector} from 'react-redux';
import {selectMode, selectPreferences} from '../../rdx/store';
import {
    setFocusTime,
    setLongBreakTime,
    setShortBreakTime,
    toggleDarkTheme,
    toggleSounds,
    toggleVisibility,
} from '../../rdx/slices/preferencesSlice';
import {setMode} from '../../rdx/slices/modeSlice';

export default function Preferences() {
    const {visibility, darkTheme, sounds, focusTime, shortBreakTime, longBreakTime} =
        useSelector(selectPreferences);
    const {id} = useSelector(selectMode);
    const dispatch = useDispatch();

    const handleChangeFocusTime = (value) => {
        if (id === 0) {
            dispatch(setMode({...MODES[0], timeInMinutes: value}));
        }
        dispatch(setFocusTime(value));
    };

    const handleChangeShortBreakTime = (value) => {
        if (id === 1) {
            dispatch(setMode({...MODES[1], timeInMinutes: value}));
        }
        dispatch(setShortBreakTime(value));
    };

    const handleChangeLongBreakTime = (value) => {
        if (id === 2) {
            dispatch(setMode({...MODES[1], timeInMinutes: value}));
        }
        dispatch(setLongBreakTime(value));
    };

    return (
        visibility && (
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#10C843',
                    },
                }}>
                <div className="preferences">
                    <div className="preferences__container">
                        <div className="preferences__header">
                            <p className="preferences__title">Preferences</p>
                            <span
                                className="preferences__close"
                                onClick={() => dispatch(toggleVisibility())}>
                                {ReactHtmlParser(PREFERENCES_ICONS.close)}
                            </span>
                        </div>
                        <div className="preferences__item preference">
                            <p className="preference__text">Dark mode</p>
                            <div className="preference__controller">
                                <Switch
                                    checked={darkTheme}
                                    onChange={() => dispatch(toggleDarkTheme())}
                                />
                            </div>
                        </div>
                        <div className="preferences__item preference">
                            <p className="preference__text">Sounds</p>
                            <div className="preference__controller">
                                <Switch
                                    checked={sounds}
                                    onChange={() => dispatch(toggleSounds())}
                                />
                            </div>
                        </div>
                        <div className="preferences__item preference">
                            <p className="preference__text">Focus length</p>
                            <div className="preference__controller">
                                <InputNumber
                                    min={1}
                                    max={90}
                                    defaultValue={focusTime}
                                    onChange={handleChangeFocusTime}
                                />
                            </div>
                        </div>
                        <div className="preferences__item preference">
                            <p className="preference__text">Short break length</p>
                            <div className="preference__controller">
                                <InputNumber
                                    min={1}
                                    max={90}
                                    defaultValue={shortBreakTime}
                                    onChange={handleChangeShortBreakTime}
                                />
                            </div>
                        </div>
                        <div className="preferences__item preference">
                            <p className="preference__text">Long break length</p>
                            <div className="preference__controller">
                                <InputNumber
                                    min={1}
                                    max={90}
                                    defaultValue={longBreakTime}
                                    onChange={handleChangeLongBreakTime}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        )
    );
}
