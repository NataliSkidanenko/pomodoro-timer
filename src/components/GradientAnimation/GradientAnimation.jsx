import {useSelector} from 'react-redux';
import {selectMode, selectPreferences} from '../../rdx/store';
import './GradientAnimation.scss';

export default function GradientAnimation() {
    const {color, timer} = useSelector(selectMode);

    return (
        <div className={`animation ${timer ? 'visible' : ''}`}>
            <div className="container">
                <div
                    className={
                        timer &&
                        `${color === 'red' ? 'red' : color === 'green' ? 'green' : 'blue'}-gradient`
                    }></div>
            </div>
        </div>
    );
}
