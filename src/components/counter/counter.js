import './counter.css';
import { useState } from 'react';

// export class Counter {}

export function Counter({ initial }) {
    const [counter, setCounter] = useState(initial);

    function handlerClick(ev, value) {
        console.log('click', ev);
        setCounter((prev) => prev + value);
        console.log(counter);
    }

    return (
        <>
            <output>{counter}</output>
            <div className="buttons">
                <button onClick={(ev) => handlerClick(ev, -1)}> - </button>
                <button onClick={(ev) => handlerClick(ev, +1)}> + </button>
            </div>
        </>
    );
}
