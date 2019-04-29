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

const reducer = (state, action) => {
    switch (action.type) {
        case 'LAPSE':
            return { ...state, lapse: action.now - action.startTime };
        case 'TOGGLE_RUNNING':
            return { ...state, running: !state.running };
        case 'CLEAR':
            return initialState;
        default:
            return state;
    }
};

const StopWatch = () => {
    const [{ running, lapse }, dispatch] = useReducer(reducer, initialState);
    const intervalRef = useRef(null);

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    const clearStopWatch = () => {
        clearInterval(intervalRef.current);
        dispatch({ type: 'CLEAR' });
    };

    const runStopWatch = () => {
        if (running) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now() - lapse;
            intervalRef.current = setInterval(() => {
                dispatch({ type: 'LAPSE', now: Date.now(), startTime });
            }, 0);
        }
        dispatch({ type: 'TOGGLE_RUNNING' });
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
