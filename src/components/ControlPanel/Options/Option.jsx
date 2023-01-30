export default function Option({icon, title, handlerClick}) {
    return (
        <li className="options__item" onClick={handlerClick}>
            {icon}
            <p>{title}</p>
        </li>
    );
}
