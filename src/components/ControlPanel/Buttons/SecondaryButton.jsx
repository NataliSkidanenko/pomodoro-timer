export default function SecondaryButton({icon, handlerClick}) {
    return (
        <button className="secondary-button" onClick={handlerClick}>
            <div className="icon">{icon}</div>
        </button>
    );
}
