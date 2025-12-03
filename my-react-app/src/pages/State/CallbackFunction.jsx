import React from 'react'
import { useState } from 'react';

const CallbackFunction = () => {
    let [num, setNum] = useState(1);
    return (
        <>
            <h1>State Example</h1>
            <h2> num {num}</h2>

            <button onClick={() => {num > 1 ? setNum (num-1) : null}}>Decrement</button>
            <button onClick={() => setNum(num + 1)}>Increment</button>

        </>
    )
}

export default CallbackFunction