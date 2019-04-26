/* 
Having a reducer is great for complex components but for our simple Stopwatch it’s a layer of abstraction that might not be necessary.
We'll cover:
Converting your reducer into a function that shallow merges the new state into the old
Refactoring your dispatch function into setState 
*/

import React, { useReducer, useRef, useEffect } from 'react';

const buttonStyles = {
    border: '1px solid #ccc',
    background: '#fff',
    fontSize: '2em',
    padding: 15,
    margin: 5,
    width: 200,
};

const initialState = {
    running: false,
    lapse: 0,
};

const reducer = (currentState, newState) => {
    return { ...currentState, ...newState };
};

const StopWatch = () => {
    const [{ running, lapse }, setState] = useReducer(reducer, initialState);
    const intervalRef = useRef(null);

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    const clearStopWatch = () => {
        clearInterval(intervalRef.current);
        setState({
            running: false,
            lapse: 0,
        });
    };

    const runStopWatch = () => {
        if (running) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now() - lapse;
            intervalRef.current = setInterval(() => {
                setState({ lapse: Date.now() - startTime });
            }, 0);
        }
        setState({ running: !running });
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <label
                style={{
                    fontSize: '5em',
                    display: 'block',
                }}
            >
                {lapse} ms
            </label>
            <button onClick={runStopWatch} style={buttonStyles}>
                {running ? 'Stop' : 'Start'}
            </button>
            <button onClick={clearStopWatch} style={buttonStyles}>
                Clear
            </button>
        </div>
    );
};

export default StopWatch;
