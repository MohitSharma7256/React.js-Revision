import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

    // Correct: Object Destructuring
    let { name, designation, salary } = useParams();

    return (
        <>
            <div>This is Profile Page</div>

            {name && <h2>Name: {name}</h2>}
            {designation && <h2>Designation: {designation}</h2>}
            {salary && <h2>Salary: {salary}</h2>}
        </>
    )
}

export default Profile
