import React, { useState } from 'react'
import Child2 from './Child2'

// sending data from child to parent (Lifting State Up)

const Parent2 = () => {

    // Parent me state banayi jisme child data store hoga
    const [data, setData] = useState([]);

    // Callback function jo child call karega
    const receiveDataFromChild = (childData) => {
        setData(childData); // child se aaya data set kar diya
    };

    return (
        <>
            <h1><b>Props Example</b></h1>
            <h1>This is Parent2 Component</h1>
            <h2>Receiving data from Child2 to Parent2</h2>

            {/* Callback ko child me bhej diya */}
            <Child2 sendData={receiveDataFromChild} />

            {/* Table show only if data is available */}
            {data.length ? (
                <table border={2} cellPadding={10} cellSpacing={2}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Designation</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Salary</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.designation}</td>
                                <td>{item.state}</td>
                                <td>{item.country}</td>
                                <td>{item.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p><i>No data received yet...</i></p>
            )}
        </>
    );
};

export default Parent2;
