/* 
  Q. Using props, send data from Parent to Child.  
     Child should receive and display that data.  
     Add comments explaining how props work + some styling.
*/

import React from "react";


// -------------------- CHILD COMPONENT --------------------
/*Child Component receives data using its function parameters. Props = an object that contains all values passed from parent.
*/
const Child = (props) => {
    return (
        <div style={{
            background: "#e0f7fa",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px",
            textAlign: "center"
        }}>
            <h2>Child Component</h2>

            {/* Using props data */}
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                Hello, {props.name}!
            </p>

            <p style={{ color: "green", fontSize: "16px" }}>
                Your age is: {props.age}
            </p>
        </div>
    );
};


export default Child;

