/**
 * When you load an application, you don't want to load every component to the browser all at once.
 * This can take forever to load, especially over a slow network.
 * With React.lazy, you can now code split your components and only load them when they are needed.
 * Once a component is loaded, it will stay loaded within the application.
 * In this lesson, you will:
 * Lazy Load a component with React.lazy
 * Render that component with Suspense
 * Provide a fallback to Suspense that will render while the lazy loaded component is loading
 */

import React, { useState, Suspense } from 'react';
import './vanilla-tilt.css';

const Tilt = React.lazy(() => import('./react-lazy.tilt'));

function useToggle(init = false) {
    const [on, setOn] = useState(init);
    const toggle = () => setOn(!on);
    return [on, toggle];
}

function lazyTilt() {
    const [showTilt, toggleTilt] = useToggle();
    return (
        <div>
            <label>
                show tilt
                <input
                    type="checkbox"
                    checked={showTilt}
                    onChange={toggleTilt}
                />
            </label>

            <div className="totally-centered">
                {showTilt ? (
                    <Suspense fallback={<div>loading...</div>}>
                        <Tilt>
                            <div className="totally-centered">
                                vanilla-tilt.js
                            </div>
                        </Tilt>
                    </Suspense>
                ) : null}
            </div>
        </div>
    );
}

export default lazyTilt;
