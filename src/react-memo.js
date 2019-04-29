/**
 * You only want to re-render components when the data for that component has changed.
 * Often times you'll find that multiple instances of a component will re-render when the props change for one of them.
 * With React.memo, you can now pass a stateless functional component to it and it will ensure that it does not rerender
 * unless the props given to the component changes.
 * In this lesson, you'll learn how to implement this with your stateless functional components.
 * NOTE: This does not work for Class based React Components, use PureComponent or shouldComponentUpdate.
 */
import React, { useState } from 'react';

const Upper = React.memo(function Upper({ children }) {
    const [count, setCount] = useState(0);
    console.log('rendering', children);
    return (
        <div>
            Uppercase version: {children.toUpperCase()}{' '}
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    );
});

const nameForm = () => {
    const [first, setFirstName] = useState('');
    const [last, setLastName] = useState('');
    return (
        <div>
            <label htmlFor="first-name-input">First Name</label>
            <input
                id="first-name-input"
                onChange={e => setFirstName(e.target.value)}
            />
            <Upper>{first}</Upper>
            <hr />
            <label htmlFor="last-name-input">Last Name</label>
            <input
                id="last-name-input"
                onChange={e => setLastName(e.target.value)}
            />
            <Upper>{last}</Upper>
        </div>
    );
};

export default nameForm;
