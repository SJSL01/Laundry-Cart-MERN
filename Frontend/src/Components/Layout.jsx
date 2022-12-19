import React from 'react'

import Footer2 from './Footer_2'
import Navbar from './Navbar'

import Footer from './Footer'

import Sidenav from './Sidenav'


export default function Layout({ children }) {
    return (
        <div>
            <Navbar/>
            <div style={{display:"flex"}}>
            <Sidenav/>
            {children}

            <Footer/>

            </div>
            <Footer2/>

        </div>
    )
}
