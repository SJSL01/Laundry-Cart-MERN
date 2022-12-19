import React from 'react'
import '../Styles/Sidenav.css'

function Sidenav() {
  return (
    <div className='Sidenav'>
        <section className='sidebar'>
                <div className='div-icons'>
                    <div className='div-icons'>
                        <img src={require("../Assets/home-run (1).png")} alt="df" />
                    </div>
                    <div className='div-icons'>
                        <img src={require("../Assets/more.png")} alt="df"/>
                    </div>
                <div className='div'>
                    <img src={require("../Assets/list.png")} alt="List"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Sidenav
