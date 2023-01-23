import './ModeIndicator.scss';
export default function Option({img, title}) {
    return (
        <div className="mode">
            {img}
            <p className="mode__text">{title}</p>
        </div>
    );
}
