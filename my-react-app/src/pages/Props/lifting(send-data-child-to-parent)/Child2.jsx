import React from 'react'

const Child2 = ({ sendData }) => {

    // Child ka data (ye parent ko send karenge)
    let data = [
        { id: 1002, name: "Mohit Sharma", age: 24, designation: "Tester", state: "UP", district: "Noida", country: "India", salary: 85000 },
        { id: 1003, name: "Khushi Kumari", age: 26, designation: "Manager", state: "Delhi", district: "New Delhi", country: "India", salary: 85000 },
        { id: 1004, name: "Sneha Kumari", age: 22, designation: "Designer", state: "MP", district: "Indore", country: "India", salary: 85000 },
        { id: 1005, name: "Priya Singh", age: 25, designation: "Backend Dev", state: "Punjab", district: "Ludhiana", country: "India", salary: 85000 },
        { id: 1006, name: "Ravi Kumar", age: 28, designation: "Frontend Dev", state: "Rajasthan", district: "Jaipur", country: "India", salary: 85000 },
        { id: 1007, name: "Kunal Joshi", age: 27, designation: "Full Stack Dev", state: "Gujarat", district: "Ahmedabad", country: "India", salary: 85000 },
        { id: 1008, name: "Shivani Mehta", age: 24, designation: "AI Engineer", state: "Karnataka", district: "Bangalore", country: "India", salary: 85000 },
        { id: 1009, name: "Harsh Patel", age: 29, designation: "Cloud Engineer", state: "Maharashtra", district: "Mumbai", country: "India", salary: 85000 },
        { id: 1010, name: "Nidhi Yadav", age: 21, designation: "Intern", state: "Haryana", district: "Gurgaon", country: "India", salary: 85000 }
    ];

    return (
        <>
            <h2>This is Child2 Component</h2>

            {/* Correct variable send kar rahe hain */}
            <button onClick={() => sendData(data)}>
                Send Data to Parent
            </button>
        </>
    )
}

export default Child2
