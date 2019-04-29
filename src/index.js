import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './01-Counter';
import Tilt from './03-VanillaTilt';
import StopWatch from './04-StopWatch';
import ReactMemoExemple from './react-memo';
import LazyTilt from './react-lazy-suspense';
import PokemonApp from './react-suspense';
import './styles.css';

function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <hr />
            <PokemonApp />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
