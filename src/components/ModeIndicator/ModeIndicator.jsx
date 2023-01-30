import './ModeIndicator.scss';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';

export default function ModeIndicator({img, title}) {
    return (
        <div className="mode">
            {ReactHtmlParser(img)}
            <p className="mode__text">{title}</p>
        </div>
    );
}
