import './menu.css';

export function Menu({ options }) {
    return (
        <nav>
            <ul>
                {options.map((item) => (
                    <li key={item.label}>
                        <a href={item.path}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
