import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom"
import ToastContext from '../Context/ToastContext'
import "../Styles/Navbar.css"
import { useRef } from 'react'
export default function Navbar({ user }) {

    const scrollRef = useRef()
    const { toast } = useContext(ToastContext)

   
        console.log("ref");
        scrollRef.current?.scrollIntoView()


    const Logout = () => {
        toast.success("LOGGED")
    }
    return (

        <nav ref={scrollRef}>
            <ul className='logo'>
                <li className='fs-4'>
                    <Link style={{ color: "#5861AE" }} to={"/home"}>LAUNDRY</Link>
                </li>
            </ul>

            <ul className='links'>
                {!user && <li>
                    <Link to={"/home"}>Home</Link>
                </li>}
                <li>
                    <Link to={"/Pricing"}>Pricing</Link>
                </li>
                <li>
                    <Link to={"/career"}>Career</Link>
                </li>

                {!user ? <>
                    <li style={{ backgroundColor: "#5861AE" }}>
                        <Link style={{ color: "white" }} to={"/signup"}>Sign In</Link>
                    </li>
                </>
                    :
                    <li style={{ backgroundColor: "#5861AE" }}>
                        <div class="dropdown drop-style">
                            <button class="btn btn-secondary dropdown-toggle" style={{ backgroundColor: "#5861AE", border: "0" }} data-bs-toggle="dropdown" aria-expanded="false">
                                {user}
                            </button>
                            <div class="dropdown-menu">
                                <li className='fs-5'>
                                    <button class="dropdown-item"
                                        style={{ margin: "0 auto", textAlign: "center", backgroundColor: "red", borderRadius: "10px", color: "white" }}
                                        onClick={() => { toast.success("logout") }}>Logout</button>
                                </li>
                            </div>
                        </div>
                    </li>
                }
            </ul>

        </nav >
    )
}
