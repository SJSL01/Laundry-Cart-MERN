import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidenav from '../Components/Sidenav'
import '../Styles/Home.css'
import ToastContext from "../Context/ToastContext";
function Home() {

  const navigate = useNavigate()
  const [orders, setOrders] = useState([])

  const { toast } = useContext(ToastContext)

  useEffect(() => {
    getOrders()
  }, [])


  const getOrders = async () => {
    try {
      const headers = { "Authorization": `Bearer ${sessionStorage.getItem("token")}` }
      const res = await axios.post("http://localhost:3010/orders/getOrders", null, { headers })

      setOrders(res.data)
    } catch (error) {
      console.log(error);
    }
  }


  const handleCancel = async (id) => {
    try {
      const headers = { "Authorization": `Bearer ${sessionStorage.getItem("token")}` }
      const res = await axios.put(`http://localhost:3010/orders/cancel/${id}`,null,{headers})
      getOrders()
      toast.success(res.data)
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

      {orders.length ?
        <div className='my-orders'>
          <div className='order-headings' style={{ position: "relative" }}>
            <div>
              Order id
            </div>
            <div style={{ left: "10.5vw" }}>
              Order Date & Time
            </div>
            <div style={{ left: "24vw" }}>
              Store Location
            </div>
            <div style={{ left: "36vw" }}>
              City
            </div>
            <div style={{ left: "45vw" }}>
              Store Phone
            </div>
            <div style={{ left: "54.5vw" }}>
              Total Items
            </div>
            <div style={{ left: "62vw" }}>
              Price
            </div>
            <div style={{ left: "70vw" }}>
              Status
            </div>
            <div style={{ left: "88vw" }}>
              View
            </div>
          </div>

          {orders.map((order, key) => {
            return (
              <div className='order-info' key={key}>
                <div style={{ fontWeight: "bold" }}>
                  ORID000{key}
                </div>
                <div>
                  {order.date_time}
                </div>
                <div style={{ marginLeft: "10px" }}>
                  {order.store}
                </div>
                <div style={{ marginLeft: "10px" }}>
                  {order.city}
                </div>
                <div>
                  {order.phone}
                </div>
                <div>
                  {order.total_items}
                </div>
                <div style={{color:"#5861AE",fontWeight:"bold"}}>
                  {order.price} Rs
                </div>
                <div style={order.status === "Cancelled" ? { color: "red" } : {}}>
                  {order.status}
                </div>
                {order.status === "Ready to Pickup" ? <span onClick={() => { handleCancel(order._id) }} style={{ cursor: "pointer", color: "red" }} >
                  Cancel Order
                </span> : <span style={{ color: "transparent" }}>Cancel Order</span>}
                <div>
                  <img style={{width:"20px"}} src={require("../Assets/view.png")} alt="" />
                </div>
              </div>
            )
          })}
        </div>




        : <div id='Main-Create'>
          <div className='Create-Btn'>
            <h6>No Orders Avaiable</h6>
            <Link to='/Createorder'>
              <button id='button'>Create</button>
            </Link>
          </div>
        </div>
      }

    </div >


  )
}

export default Home;