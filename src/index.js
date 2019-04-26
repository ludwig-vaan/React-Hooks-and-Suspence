import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './01-Counter';
import Tilt from './03-VanillaTilt';
import StopWatch from './04-StopWatch';
import StopWatchReducer from './05-StopWatch-useReducer';
import StopWatchShallowMerge from './06-StopWatch-useReducer-refacto';
import StopWatchCodeSplitting from './07-StopWatch-code-splitting';
import ActivityDetector from './08-ActivityDetector';

import './styles.css';

function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            {/* <Counter className="Counter" />
            <hr />
            <Tilt />
            <hr />
            <StopWatch />
            <hr />
            <StopWatchReducer />
            <hr />
            <StopWatchShallowMerge /> */}
            <StopWatchCodeSplitting />
            <ActivityDetector />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
