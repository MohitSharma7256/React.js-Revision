import React, { useEffect, useState } from "react";

const EffectWithDependencies = () => {
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(1);
    const [num3, setNum3] = useState(1);

    // Runs only when num2 or num3 changes
    useEffect(() => {
        console.log("useEffect([num2, num3]) → num2 or num3 changed");
    }, [num2, num3]);

    return (
        <div className="p-3 border m-3">
            <h2>Effect with Dependencies</h2>

            {/* num1 button */}
            <h3>num1 = {num1}</h3>
            <button className="btn btn-primary w-100"
                onClick={() => setNum1(num1 + 1)}
            >
                Increment num1
            </button>

            {/* num2 button */}
            <h3 className="mt-3">num2 = {num2}</h3>
            <button className="btn btn-warning w-100"
                onClick={() => setNum2(num2 + 1)}
            >
                Increment num2 (Triggers effect)
            </button>

            {/* num3 button */}
            <h3 className="mt-3">num3 = {num3}</h3>
            <button className="btn btn-info w-100"
                onClick={() => setNum3(num3 + 1)}
            >
                Increment num3 (Triggers effect)
            </button>

            <p className="mt-2 text-secondary">
                This effect runs when <b>num2</b> or <b>num3</b> changes.
            </p>
        </div>
    );
};

export default EffectWithDependencies;
