import React from "react";
import { name, arr, emp, employees, display, Test } from "./ExportExample";

var obj = new Test();

const ImportExample = () => {
    return (
        <>
            <div>
                <h1>Importing data from ExportExample file</h1>

                <h2>Name: {name}</h2>
                <h2>Array: {arr.join(" ")}</h2>

                <h2>Single Employee Details</h2>
                <h3>
                    ID: {emp.id} <br />
                    Name: {emp.name} <br />
                    Age: {emp.age} <br />
                    Designation: {emp.designation} <br />
                    State: {emp.state} <br />
                    District: {emp.district} <br />
                    Country: {emp.country}
                </h3>

                <hr />

                <h2>All Employees (10 Added)</h2>
                {employees.map((e) => (
                    <div key={e.id}>
                        <p>
                            <b>ID:</b> {e.id} |
                            <b> Name:</b> {e.name} |
                            <b> Age:</b> {e.age} |
                            <b> Designation:</b> {e.designation} |
                            <b> State:</b> {e.state} |
                            <b> District:</b> {e.district} |
                            <b> Country:</b> {e.country}
                        </p>
                    </div>
                ))}

                {display()}
                {obj.show()}
            </div>
        </>
    );
};

export default ImportExample;
