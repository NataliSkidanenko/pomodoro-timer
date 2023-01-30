export default function PrimaryButton({icon, handlerClick}) {
    return (
        <button onClick={handlerClick} className="primary-button">
            <div className="icon">{icon}</div>
        </button>
    );
}
