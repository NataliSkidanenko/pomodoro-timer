import './ModeIndicator.scss';
import parse from 'html-react-parser';

export default function ModeIndicator({img, title}) {
    return (
        <div className="mode">
            {parse(img)}
            <p className="mode__text">{title}</p>
        </div>
    );
}
