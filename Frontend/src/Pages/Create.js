import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Create.css'
function Create() {
  return (
    <>
    <div id='Main-Create'>
    <div id='header'>Orders | 0</div>
        <div className='Create-Btn'>
            <h6>No Orders Avaiable</h6>
            <Link to='/Createorder'>
            <button id='button'>Create</button>
            </Link>  
        </div>
    </div>
        
    </>
   
  )
}

export default Create