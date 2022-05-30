import { Menu } from '../menu/menu';
import './header.css';

export function Header() {
    const title = 'TODO List';
    const options = [
        { path: './index.html', label: 'Home' },
        { path: './todo.html', label: 'Tasks' },
        { path: '/about.html', label: 'About' },
    ];
    return (
        <header className="header">
            <h1>{title}</h1>
            <Menu options={options}></Menu>
            {/* Menu(options) */}
        </header>
    );
}
