import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './01-Counter';
import Tilt from './03-VanillaTilt';
import StopWatch from './04-StopWatch';

import './styles.css';

function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <Counter className="Counter" />
            <hr />
            <Tilt />
            <hr />
            <StopWatch />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
