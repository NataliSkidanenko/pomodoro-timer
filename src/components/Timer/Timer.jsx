import './Timer.scss';
import {audioAlarm} from '../../data';
import {useSelector} from 'react-redux';
import {selectPreferences} from '../../rdx/store';

export default function Timer({minutes, seconds}) {
    const {sounds} = useSelector(selectPreferences);
    if (sounds && minutes === 0 && seconds === 0) {
        audioAlarm.play();
    }

    return (
        <div className="timer">
            <p className="timer__numbers">{minutes < 10 ? '0' + minutes : minutes}</p>
            <p className="timer__numbers">{seconds < 10 ? '0' + seconds : seconds}</p>
        </div>
    );
}
