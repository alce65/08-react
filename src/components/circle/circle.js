import { useState } from 'react';
import './circle.css';

export function Circle() {
    const [selected, setSelected] = useState(false);

    function handleClick() {
        setSelected((prev) => !prev);
    }
    return (
        <div className="circle">
            <div
                onClick={handleClick}
                className={selected ? 'active' : ''}
            ></div>
        </div>
    );
}
