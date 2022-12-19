import React from 'react'

import Footer2 from './Footer_2'
import Navbar from './Navbar'
import Sidenav from './Sidenav'

export default function Layout({ children }) {
    return (
        <div>
            <Navbar/>
            <div style={{display:"flex"}}>
            <Sidenav/>
            {children}
            </div>
            <Footer2/>
        </div>
    )
}
