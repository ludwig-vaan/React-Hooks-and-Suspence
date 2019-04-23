import React, { useState, useRef, useEffect } from 'react';

const buttonStyles = {
    border: '1px solid #ccc',
    background: '#fff',
    fontSize: '2em',
    padding: 15,
    margin: 5,
    width: 200
};

const useRunning = ({ initialRunningState = false }) => {
    const [running, setRunning] = useState(initialRunningState);
    const runningHandler = () => {
        setRunning(() => !running);
    };
    return { running, runningHandler, setRunning };
};

const StopWatch = () => {
    const [lapse, setLapse] = useState(0);
    const intervalRef = useRef(null);

    const { running, runningHandler, setRunning } = useRunning({
        initialRunningState: false
    });

    useEffect(() => {
        return () => intervalRef.current;
    }, []);

    const clearStopWatch = () => {
        clearInterval(intervalRef.current);
        setLapse(0);
        setRunning(false);
    };
    const runStopWatch = () => {
        if (running) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now() - lapse;
            intervalRef.current = setInterval(() => {
                setLapse(Date.now() - startTime);
            }, 0);
        }
        runningHandler();
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <label
                style={{
                    fontSize: '5em',
                    display: 'block'
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
