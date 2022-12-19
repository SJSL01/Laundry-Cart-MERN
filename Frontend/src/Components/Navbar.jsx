import React from 'react'
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"
export default function Navbar() {
    return (
        <nav>
            <ul className='logo'>
                <li className='fs-4'>
                   <Link style={{ color: "#5861AE" }} to={"/home"}>LAUNDRY</Link> 
                </li>
            </ul>

            <ul className='links'>
                <li>
                    <Link to={"/home"}>Home</Link>
                </li>
                <li>
                    <Link to={"/Pricing"}>Pricing</Link>
                </li>
                <li>
                    <Link to={"/career"}>Career</Link>
                </li>
                <li style={{ backgroundColor: "#5861AE" }}>
                    <Link style={{ color: "white" }} to={"/signup"}>Sign In</Link>
                </li>
            </ul>

        </nav >
    )
}
