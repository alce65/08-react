import logo from './logo.svg';
import './App.css';
import { Header } from '../header/header';
import { Counter } from '../counter/counter';
import { Circle } from '../circle/circle';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React in ISDI Coders
                </a>
                <Counter initial={0}></Counter>
                <Counter initial={10}></Counter>
                <div>
                    <Circle></Circle>
                </div>
            </header>
        </div>
    );
}

export default App;
