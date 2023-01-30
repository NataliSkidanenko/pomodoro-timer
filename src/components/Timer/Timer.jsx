import './Timer.scss';

export default function Timer({minutes, seconds}) {
    return (
        <div className="timer">
            <p className="timer__numbers">{minutes < 10 ? '0' + minutes : minutes}</p>
            <p className="timer__numbers">{seconds < 10 ? '0' + seconds : seconds}</p>
        </div>
    );
}
