import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const App = () => {
    // Set the initial count to 0
    const [count, setCount] = useState(0);
    useEffect(() => {
        // increment the count by 1
        const countTimer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
            // every 1000 milliseconds
        }, 1000);
        // and clear this timer when the component is unmounted
        return function cleanup() {
            clearInterval(countTimer);
        };
    });

    return (<Text>Count is {count}</Text>);
};

export default App;