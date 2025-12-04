import React, { useEffect } from 'react'
import { useState } from 'react';

const UseEffectExample = () => {
    let [num1, setNum1] = useState(1);
    let [num2, setNum2] = useState(1);
    let [num3, setNum3] = useState(1);

    // call setup function call every time when component is required to re-render
    useEffect(() => {
        console.log("Component re-rendered");
    })


    // call setup call only one time when component is required to render first time
    useEffect(() => {
        console.log("useEffect with Empty Dependecies array is called")
    }, [])

    // call setup function call every time when num2 and num3 changed
    useEffect(() => {
        console.log("useEffect with num2 and num3 as dependencies is called")
    }, [num2, num3])


    return (
        <>
            <div className='bg-primary text-center p-2 text-light'>
                <h1>UseEffectExample Hook Example</h1>
                <div className='row'>
                    <div className='col-4'>
                        <h2 className='text-center'>num1={num1}</h2>
                        <button className='btn btn-primary al-100' onClick={() => setNum1(num1 + 1)}>Increment num1</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseEffectExample;