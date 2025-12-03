import React from 'react'

/*
    ------------------------------------------------------------
    ✔ ArrayofObjects Component — NOTES

    1️⃣ Array of Objects kya hota hai?
        → Ek array jisme multiple objects hote hain.
        → Har object ek user / product / employee ka data store karta hai.
        → Real world me database se jo data aata hai, wo mostly isi format me aata hai.

        Example:
        [
            {id: 1, name: "Mohit"},
            {id: 2, name: "Khushi"}
        ]

    2️⃣ Yeh component kya karta hai?
        → Is array of objects ko ek table me display karta hai.
        → React me map() ka use karke dynamic rows create karta hai.
        → Har row me id, name, age, designation, state, district, country show hota hai.

    3️⃣ Iska use kab hota hai?
        ✔ Dashboard me data show karna ho
        ✔ Admin panel me list show karna ho
        ✔ Table format me API data display karna ho
        ✔ Student list, Employee list, Product list, etc.

    4️⃣ Important Points:
        ✔ map() → dynamic table rows ke liye
        ✔ key={item.id} → React ko batata hai ki row unique hai
        ✔ <table> structure → thead (headers) + tbody (data)
    ------------------------------------------------------------
*/

const ArrayofObjects = () => {

    // ✔ Sample data — real-world me yeh API se aata hai
    let data = [
        { id: 1002, name: "Mohit Sharma", age: 24, designation: "Tester", state: "UP", district: "Noida", country: "India" },
        { id: 1003, name: "Khushi Kumari", age: 26, designation: "Manager", state: "Delhi", district: "New Delhi", country: "India" },
        { id: 1004, name: "Sneha Kumari", age: 22, designation: "Designer", state: "MP", district: "Indore", country: "India" },
        { id: 1005, name: "Priya Singh", age: 25, designation: "Backend Dev", state: "Punjab", district: "Ludhiana", country: "India" },
        { id: 1006, name: "Ravi Kumar", age: 28, designation: "Frontend Dev", state: "Rajasthan", district: "Jaipur", country: "India" },
        { id: 1007, name: "Kunal Joshi", age: 27, designation: "Full Stack Dev", state: "Gujarat", district: "Ahmedabad", country: "India" },
        { id: 1008, name: "Shivani Mehta", age: 24, designation: "AI Engineer", state: "Karnataka", district: "Bangalore", country: "India" },
        { id: 1009, name: "Harsh Patel", age: 29, designation: "Cloud Engineer", state: "Maharashtra", district: "Mumbai", country: "India" },
        { id: 1010, name: "Nidhi Yadav", age: 21, designation: "Intern", state: "Haryana", district: "Gurgaon", country: "India" }
    ];

    return (
        <>
            <h1>Array of objects example</h1>

            {/* ✔ React me table attributes camelCase me hote hain */}
            <table border="2" cellPadding="10" cellSpacing="0">

                {/* ✔ Table Header */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>State</th>
                        <th>District</th>
                        <th>Country</th>
                    </tr>
                </thead>

                {/* ✔ Table Body with dynamic rows */}
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.designation}</td>
                            <td>{item.state}</td>
                            <td>{item.district}</td>
                            <td>{item.country}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}

export default ArrayofObjects
