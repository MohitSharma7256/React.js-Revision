import React from 'react';

const Child1 = (props) => {
    return (
        <>
            <h1>this is child1 component</h1>



            <h4>name: {props.name}</h4>
            <h4>age: {props.age}</h4>
            <h4>state: {props.state}</h4>
            <h4>country: {props.country}</h4>
            <h4>designation: {props.designation}</h4>
            <h4>salary: {props.salary}</h4>



            <table border="1" cellPadding="10">
                <thead style={{ background: "#e0e7ff" }}>
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
                    {props.data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.designation}</td>
                                <td>{item.state}</td>
                                <td>{item.country}</td>
                                <td>{item.salary}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Child1;
