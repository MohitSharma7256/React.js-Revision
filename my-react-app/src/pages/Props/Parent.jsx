// -------------------- PARENT COMPONENT --------------------
/*
  Parent stores data and sends it to Child.
  We pass props just like HTML attributes.
*/
import React from "react";
import Child from "./Child"

const Parent = () => {
    const userName = "Mohit Sharma";
    const userAge = 23;

    return (
        <div style={{
            padding: "20px",
            background: "#f3e5f5",
            borderRadius: "10px"
        }}>
            <h1>Parent Component</h1>

            {/* Passing props → name & age */}
            <Child name={userName} age={userAge} />
        </div>
    );
};

export default Parent;
