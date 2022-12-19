import React from 'react'
import '../Styles/CreateOrder.css'
function CreateOrder() {
  return (
    <>
    <div className='Table-main'>
    <header>Create Order</header>
    <table className='Table'>
      <thead className='thead'>
        <tr style={{height:'50px'}}>
          <th>Product Types</th>
          <th>Quantity</th>
          <th>Wash Type</th>
          <th>Price</th>
          <th>Create</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img style={{height:'50px'}} src={require("../Assets/cloth.png")} alt="washing" />Shirts</td>
          <td><input style={{width:'80px'}}></input></td>
          <td className='wash-type'>
            <div><img src={require("../Assets/washing-machine.png")} alt="washing" /></div>
            <div><img src={require("../Assets/ironing.png")} alt="Iron" /></div>
            <div><img src={require("../Assets/towel.png")} alt="Towel" /></div>
            <div><img src={require("../Assets/bleach.png")} alt="Bleach" /></div>
          </td>
          <td>50x20</td>
          <div id='reset-btn'><button>Reset</button></div>
        </tr>
        <tr>
          <td><img style={{height:'50px'}} src={require("../Assets/tshirt.png")} alt="washing" />T Shirts</td>
          <td><input style={{width:'80px'}}></input></td>
          <td className='wash-type'>
          <div><img src={require("../Assets/washing-machine.png")} alt="washing" /></div>
            <div><img src={require("../Assets/ironing.png")} alt="Iron" /></div>
            <div><img src={require("../Assets/towel.png")} alt="Towel" /></div>
            <div><img src={require("../Assets/bleach.png")} alt="Bleach" /></div>
          </td>
          <td>50x20</td>
          <div id='reset-btn'><button>Reset</button></div>
        </tr>
        <tr>
          <td><img style={{height:'50px'}} src={require("../Assets/trousers.png")} alt="washing" />Trousers</td>
          <td><input style={{width:'80px'}}></input></td>
          <td className='wash-type'>
          <div><img src={require("../Assets/washing-machine.png")} alt="washing" /></div>
            <div><img src={require("../Assets/ironing.png")} alt="Iron" /></div>
            <div><img src={require("../Assets/towel.png")} alt="Towel" /></div>
            <div><img src={require("../Assets/bleach.png")} alt="Bleach" /></div>
          </td>
          <td>50x20</td>
          <div id='reset-btn'><button>Reset</button></div>
        </tr>
        <tr>
          <td><img style={{height:'50px'}} src={require("../Assets/jeans.png")} alt="washing" />Jeans</td>
          <td><input style={{width:'80px'}}></input></td>
          <td className='wash-type'>
          <div><img src={require("../Assets/washing-machine.png")} alt="washing" /></div>
            <div><img src={require("../Assets/ironing.png")} alt="Iron" /></div>
            <div><img src={require("../Assets/towel.png")} alt="Towel" /></div>
            <div><img src={require("../Assets/bleach.png")} alt="Bleach" /></div>
          </td>
          <td>50x20</td>
          <div id='reset-btn'><button>Reset</button></div>
        </tr>
        <tr>
          <td> <img style={{height:'50px'}} src={require("../Assets/boxers.png")} alt="washing" />Boxers</td>
          <td><input style={{width:'80px'}}></input></td>
          <td className='wash-type'>
          <div><img src={require("../Assets/washing-machine.png")} alt="washing" /></div>
            <div><img src={require("../Assets/ironing.png")} alt="Iron" /></div>
            <div><img src={require("../Assets/towel.png")} alt="Towel" /></div>
            <div><img src={require("../Assets/bleach.png")} alt="Bleach" /></div>
          </td>
          <td>50x20</td>
          <div id='reset-btn'><button>Reset</button></div>
        </tr>
        <tr>
          <td> <img style={{height:'50px'}} src={require("../Assets/pants.png")} alt="washing" />Joggers</td>
          <td><input style={{width:'80px'}}></input></td>
          <td className='wash-type'>
          <div><img src={require("../Assets/washing-machine.png")} alt="washing" /></div>
            <div><img src={require("../Assets/ironing.png")} alt="Iron" /></div>
            <div><img src={require("../Assets/towel.png")} alt="Towel" /></div>
            <div><img src={require("../Assets/bleach.png")} alt="Bleach" /></div>
          </td>
          <td>50x20</td>
          <div id='reset-btn'><button>Reset</button></div>
        </tr>
        <tr>
          <td>Others</td>
          <td><input style={{width:'80px'}}></input></td>
          <td className='wash-type'>
          <div><img src={require("../Assets/washing-machine.png")} alt="washing" /></div>
            <div><img src={require("../Assets/ironing.png")} alt="Iron" /></div>
            <div><img src={require("../Assets/towel.png")} alt="Towel" /></div>
            <div><img src={require("../Assets/bleach.png")} alt="Bleach" /></div>
          </td>
          <td>50x20</td>
          <div id='reset-btn'><button>Reset</button></div>
        </tr>
        </tbody>
    </table>
    <div id='bottom-btns'>
      <button id='cancel-btn'>Cancel</button>
      <button id='proceed-btn'>Proceed</button>
    </div>
    </div>
    </>
    
  )
}

export default CreateOrder