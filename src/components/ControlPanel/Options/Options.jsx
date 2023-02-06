import './Options.scss';
import Option from './Option';
import {MODES, OPTIONS_ICON as icons} from '../../../data';
import {useDispatch} from 'react-redux';
import {setMode} from '../../../rdx/slices/modeSlice';
import ReactHtmlParser from 'react-html-parser';
import {toggleVisibility} from '../../../rdx/slices/preferencesSlice';

export default function Options({visible}) {
    const dispatch = useDispatch();

    const handleMode = (mode) => {
        dispatch(setMode(mode));
    };

    return (
        <div className={`options ${visible ? '' : 'hidden'}`}>
            <ul className="options__list">
                <Option
                    key={0}
                    icon={ReactHtmlParser(icons.preferences)}
                    title="Preferences"
                    handlerClick={() => dispatch(toggleVisibility())}
                />
                <Option
                    key={1}
                    icon={ReactHtmlParser(icons.focus)}
                    title="Focus Mode"
                    handlerClick={() => handleMode(MODES[0])}
                />
                <Option
                    key={2}
                    icon={ReactHtmlParser(icons.break)}
                    title="Short Break Mode"
                    handlerClick={() => handleMode(MODES[1])}
                />
                <Option
                    key={3}
                    icon={ReactHtmlParser(icons.break)}
                    title="Long Break Mode"
                    handlerClick={() => handleMode(MODES[2])}
                />
            </ul>
        </div>
    );
}
