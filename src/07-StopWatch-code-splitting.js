/* 
A lot of the time, when you define logic in a component, you will want to reuse it in a few different places within your application as separate instances.

In this lesson, we will break out the logic of our StopWatch Component and use two instances within our stopwatch and compare the difference between the two lapse instances.

You'll learn:

    Create a function as a custom hook for your components
    Create multiple instances of the logic within a component
    Compare the values between the two instances.
*/

import React, { useReducer, useRef, useEffect } from 'react';

const useStopWatch = () => {
    const initialState = {
        running: false,
        lapse: 0,
    };

    const reducer = (currentState, newState) => {
        return { ...currentState, ...newState };
    };

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

    return { runStopWatch, clearStopWatch, lapse, running };
};

const StopWatch = () => {
    const stopWatchOne = useStopWatch();
    const stopWatchTwo = useStopWatch();

    return (
        <div style={{ textAlign: 'center' }}>
            <label
                style={{
                    fontSize: '5em',
                    display: 'block',
                }}
            >
                {stopWatchOne.lapse} ms
            </label>
            <button onClick={stopWatchOne.runStopWatch} style={buttonStyles}>
                {stopWatchOne.running ? 'Stop' : 'Start'}
            </button>
            <button onClick={stopWatchOne.clearStopWatch} style={buttonStyles}>
                Clear
            </button>
            <hr />
            <div>
                {`Lapse difference :
                    ${stopWatchOne.lapse - stopWatchTwo.lapse} `}
            </div>
            <hr />
            <label
                style={{
                    fontSize: '5em',
                    display: 'block',
                }}
            >
                {stopWatchTwo.lapse} ms
            </label>
            <button onClick={stopWatchTwo.runStopWatch} style={buttonStyles}>
                {stopWatchTwo.running ? 'Stop' : 'Start'}
            </button>
            <button onClick={stopWatchTwo.clearStopWatch} style={buttonStyles}>
                Clear
            </button>
        </div>
    );
};

const buttonStyles = {
    border: '1px solid #ccc',
    background: '#fff',
    fontSize: '2em',
    padding: 15,
    margin: 5,
    width: 200,
};

export default StopWatch;
