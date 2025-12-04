import React, { useEffect, useState } from "react";

const EffectOnlyOnce = () => {
    const [value, setValue] = useState(0);

    // Runs ONLY once (on mount)
    useEffect(() => {
        console.log("useEffect([]) → runs ONLY ONCE");
    }, []);

    return (
        <div className="p-3 border m-3">
            <h2>Effect With Empty Dependency []</h2>
            <h3>Value: {value}</h3>

            <button className="btn btn-success"
                onClick={() => setValue(value + 1)}
            >
                Increment Value (Effect Runs Once)
            </button>

            <p className="mt-2 text-secondary">
                This effect runs **only once** when the component loads.
            </p>
        </div>
    );
};

export default EffectOnlyOnce;
