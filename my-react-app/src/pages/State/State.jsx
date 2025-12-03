import React, { useState } from 'react'

const State = () => {

    // -------------------------------------------------------
    // 📝 React State:
    // useState ek React Hook hai jo component ke andar
    // dynamic value ko store karne ke liye use hota hai.
    // Jaise yaha hum num ko increment/decrement kar rahe hain.
    //
    // useState(1) → initial value = 1
    // num → current value
    // setNum → number ko update karne ka function
    // -------------------------------------------------------
    let [num, setNum] = useState(1);


    // Decrement Function
    function decrement() {
        if (num > 1) {      // value 1 se niche na jaye
            setNum(num - 1);
        }
    }

    // Increment Function
    function increment() {
        setNum(num + 1);
    }


    return (
        <>
            <h1 className='text-3xl font-bold ml-120'>State Example</h1>
            <h2 className='text-3xl font-bold ml-130'>num = {num}</h2>

            {/* 📝 onClick → button click hone par function call hota hai arrow function use karna safe hota hai */}
            <button onClick={() => decrement()} className='bg-red-400 font-bold text-2xl m-2 text-amber-100 p-3 ml-110'>Decrement</button> {" "}
            <button onClick={() => increment()} className='bg-green-400 font-bold text-2xl m-2 text-amber-100 p-3'>Increment</button>
        </>
    )
}

export default State
