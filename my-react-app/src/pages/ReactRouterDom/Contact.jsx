import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Contact = () => {

    // hook for URL query params
    const [searchParams] = useSearchParams();

    let name = searchParams.get("name");
    let designation = searchParams.get("designation");
    let salary = searchParams.get("salary");

    return (
        <>
            <h1>This is Contact page</h1>

            <h3>Query Parameters:</h3>
            <p><b>Name:</b> {name}</p>
            <p><b>Designation:</b> {designation}</p>
            <p><b>Salary:</b> {salary}</p>
        </>
    )
}

export default Contact
