import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Profile from './Profile'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Error from './Error'

const Appex = () => {
    return (
        <Router>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink> |{" "}
                    <NavLink to="/about">About</NavLink> |{" "}
                    <NavLink to="/profile/Mohit/Developer/85000">Profile</NavLink> |{" "}
                    <NavLink to="/contact?name=Mohit&designation=Developer&salary=85000">
                        Contact
                    </NavLink>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile/:name/:designation/:salary" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </Router>
    )
}

export default Appex
