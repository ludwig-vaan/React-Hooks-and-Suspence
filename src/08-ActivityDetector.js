/*
If the user hasn't used your application for a few minutes, 
you may want to log them out of the application automatically in case 
they've stepped away from the machine and someone nefarious attempts to use their session. 
Let's checkout how you can create a custom React hook that wraps a regular npm module called activity-detector to solve this problem.
*/
import React, { useState, useEffect } from 'react';
import createActivityDetector from 'activity-detector';

const useActivityDetector = options => {
    const [idle, setIdle] = useState(false);

    useEffect(() => {
        const activityDetector = createActivityDetector(options);
        activityDetector.on('idle', () => setIdle(true));
        activityDetector.on('active', () => setIdle(false));
        return () => activityDetector.stop();
    }, []);

    return idle;
};

const ActivityDetector = () => {
    const idle = useActivityDetector({ timeToIdle: 1000 });
    return <strong>{idle ? 'Are you still there ?' : 'hello there'}</strong>;
};

export default ActivityDetector;
