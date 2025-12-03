import React from "react";

var name = "Mohit Sharma";
var arr = [1, 2, 3, 4, 5];

var emp = {
    id: 1001,
    name: "Mohit Sharma",
    age: 23,
    designation: "Developer",
    state: "Bihar",
    district: "Gopalganj",
    country: "India"
};

// 🔹 Added 10 more employee records
var employees = [
    emp,
    { id: 1002, name: "Rohit Verma", age: 24, designation: "Tester", state: "UP", district: "Noida", country: "India" },
    { id: 1003, name: "Aman Gupta", age: 26, designation: "Manager", state: "Delhi", district: "New Delhi", country: "India" },
    { id: 1004, name: "Sneha Kumari", age: 22, designation: "Designer", state: "MP", district: "Indore", country: "India" },
    { id: 1005, name: "Priya Singh", age: 25, designation: "Backend Dev", state: "Punjab", district: "Ludhiana", country: "India" },
    { id: 1006, name: "Ravi Kumar", age: 28, designation: "Frontend Dev", state: "Rajasthan", district: "Jaipur", country: "India" },
    { id: 1007, name: "Kunal Joshi", age: 27, designation: "Full Stack Dev", state: "Gujarat", district: "Ahmedabad", country: "India" },
    { id: 1008, name: "Shivani Mehta", age: 24, designation: "AI Engineer", state: "Karnataka", district: "Bangalore", country: "India" },
    { id: 1009, name: "Harsh Patel", age: 29, designation: "Cloud Engineer", state: "Maharashtra", district: "Mumbai", country: "India" },
    { id: 1010, name: "Nidhi Yadav", age: 21, designation: "Intern", state: "Haryana", district: "Gurgaon", country: "India" }
];

function display() {
    return <h1>In display() function</h1>;
}

class Test {
    show() {
        return <h1>In show() of Test class</h1>;
    }
}

function ExportImportExample() {
    return (
        <>
            <h1>Export Import Example</h1>
            <h2>This is a function component</h2>
        </>
    );
}

export { name, arr, emp, employees, display, Test };
export default ExportImportExample;
