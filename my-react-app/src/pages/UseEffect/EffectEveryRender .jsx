import React, { useEffect, useState } from "react";

const EffectEveryRender = () => {
    const [count, setCount] = useState(0);

    // Runs on every re-render
    useEffect(() => {
        console.log("useEffect (NO dependency) → runs on EVERY render");
    });

    return (
        <div className="p-3 border m-3">
            <h2>Effect Without Dependency</h2>
            <h3>Count: {count}</h3>

            <button className="btn btn-primary"
                onClick={() => setCount(count + 1)}
            >
                Increment Count (Every Render Effect)
            </button>

            <p className="mt-2 text-secondary">
                This effect runs on **every render**.
            </p>
        </div>
    );
};

export default EffectEveryRender;
