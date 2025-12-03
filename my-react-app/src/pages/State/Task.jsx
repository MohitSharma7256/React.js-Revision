/*
  Q. Create 3 counters num1, num2, num3.
     - num1 increments on every click.
     - num2 increments only when num1 % 10 === 0.
     - num3 increments only when num1 % 100 === 0.
     Also implement decrement logic with same rules.
*/

import React, { useState } from 'react'

const Task = () => {
    const [num1, setNum1] = useState(1)
    const [num2, setNum2] = useState(1)
    const [num3, setNum3] = useState(1)

    // ---------------- INCREMENT ----------------
    function increment() {
        let newNum1 = num1 + 1

        // increment num2 when num1 hits multiples of 10
        if (newNum1 % 10 === 0) {
            setNum2(num2 + 1)
        }

        // increment num3 when num1 hits multiples of 100
        if (newNum1 % 20 === 0) {
            setNum3(num3 + 1)
        }

        setNum1(newNum1)
    }

    // ---------------- DECREMENT ----------------
    function decrement() {
        if (num1 > 1) {
            let newNum1 = num1 - 1

            // decrement num2 when num1 goes backwards from a multiple of 10
            if (num1 % 10 === 0) {
                setNum2(num2 - 1)
            }

            // decrement num3 when num1 goes backwards from a multiple of 100
            if (num1 % 20 === 0) {
                setNum3(num3 - 1)
            }

            setNum1(newNum1)
        }
    }

    return (
        <>
            <h1>State Example</h1>
            <h2>
                num1 = {num1} || num2 = {num2} || num3 = {num3}
            </h2>

            <button onClick={increment} style={{ margin: 10 }}>
                Increment
            </button>
            <button onClick={decrement} style={{ margin: 10 }}>
                Decrement
            </button>
        </>
    )
}

export default Task
