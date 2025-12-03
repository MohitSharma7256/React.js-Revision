import React from 'react'

const Hearders = () => {
    return (
        <>
            <div className='navbar navbar-enfound-lg bg-primary'></div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Hearders