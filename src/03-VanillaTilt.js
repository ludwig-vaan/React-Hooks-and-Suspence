import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './vanilla-tilt.css';

const Tilt = props => {
    const vanillaRef = useRef();
    useEffect(() => {
        //componentDidMount
        VanillaTilt.init(vanillaRef.current, {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.5
        });
        // correspond au componentWillUnmount
        return () => vanillaRef.current.vanillaTilt.destroy();
    }, []);

    return (
        <div ref={vanillaRef} className="tilt-root">
            <div className="tilt-child">{props.children}</div>
        </div>
    );
};

const Usage = () => (
    <div className="totally-centered">
        <Tilt>
            <div className="totally-centered">vanilla-tilt.js</div>
        </Tilt>
    </div>
);

export default Usage;
