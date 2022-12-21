import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidenav from '../Components/Sidenav'
import '../Styles/Home.css'
function Home() {

  const navigate = useNavigate()

  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders()
  }, [])


  const getOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3010/orders/")
      setOrders(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  return (

    <div style={{ display: "flex", height: "100vh", justifyContent: "space-between", flexWrap: "wrap", position: "relative" }}>

      <Sidenav />

      <div id='header'>
        <div >
          Orders | 0
        </div>
        <div>
          <button id='button-create' onClick={() => { navigate("/createOrder") }}>Create</button>
        </div>
        <div>
          <img src={require("../Assets/search.png")} alt="search" />
          <input type="text" className='search' />
        </div>
      </div>

      {orders ?
        <div className='my-orders'>
          <div className='order-headings'>
            <div>
              Order id
            </div>
            <div>
              Order Date & Time
            </div>
            <div>
              Store Location
            </div>
            <div>
              City
            </div>
            <div>
              Store Phone
            </div>
            <div>
              Total Items
            </div>
            <div>
              Price
            </div>
            <div>
              Status
            </div>
            <div>
              View
            </div>
          </div>

          <div className='order-info'>
            <div>
              Order id
            </div>
            <div>
              Order Date & Time
            </div>
            <div>
              Store Location
            </div>
            <div>
              City
            </div>
            <div>
              Store Phone
            </div>
            <div>
              Total Items
            </div>
            <div>
              Price
            </div>
            <div>
              Status
            </div>
            <div>
              View
            </div>
          </div>
          <div className='order-info'>
            <div>
              Order id
            </div>
            <div>
              Order Date & Time
            </div>
            <div>
              Store Location
            </div>
            <div>
              City
            </div>
            <div>
              Store Phone
            </div>
            <div>
              Total Items
            </div>
            <div>
              Price
            </div>
            <div>
              Status
            </div>
            <div>
              View
            </div>
          </div>

        </div>




        : <div id='Main-Create'>
          <div className='Create-Btn'>
            <h6>No Orders Avaiable</h6>
            <Link to='/Createorder'>
              <button id='button'>Create</button>
            </Link>
          </div>
        </div>}

    </div>


  )
}

export default Home;