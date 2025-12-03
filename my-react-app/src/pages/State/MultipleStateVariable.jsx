import React, { useState } from 'react'

const MultipleStateVariable = () => {
    const [num1, setNum1] = useState(1)
    const [num2, setNum2] = useState(10)

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Multiple State Variables Example</h1>

            <h2 className="text-xl mb-4">
                num1: {num1} || num2: {num2}
            </h2>

            {/* num1 buttons */}
            <div className="mb-4">
                <button
                    onClick={() => num1 > 1 && setNum1(num1 - 1)}
                    className="bg-red-500 px-4 py-2 text-white rounded-md font-semibold m-2"
                >
                    Decrement num1
                </button>

                <button
                    onClick={() => setNum1(num1 + 1)}
                    className="bg-green-500 px-4 py-2 text-white rounded-md font-semibold m-2"
                >
                    Increment num1
                </button>
            </div>

            {/* num2 buttons */}
            <div>
                <button
                    onClick={() => num2 > 1 && setNum2(num2 - 1)}
                    className="bg-red-500 px-4 py-2 text-white rounded-md font-semibold m-2"
                >
                    Decrement num2
                </button>

                <button
                    onClick={() => setNum2(num2 + 1)}
                    className="bg-green-500 px-4 py-2 text-white rounded-md font-semibold m-2"
                >
                    Increment num2
                </button>
            </div>
        </>
    )
}

export default MultipleStateVariable
