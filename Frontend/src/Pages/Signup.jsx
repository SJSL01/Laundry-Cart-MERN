import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Signup.css'
import ToastContext from '../Context/ToastContext';
import AuthContext from '../Context/AuthContext';


export default function Signup() {

  const { toast } = useContext(ToastContext)
  const { SignUp } = useContext(AuthContext)

  const [userDetails, setUSerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
    terms: false
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setUSerDetails({ ...userDetails, [name]: value })
  }


  const signup = (e) => {
    e.preventDefault()
    SignUp(userDetails)
    console.log(userDetails);
  }

  return (
    <div>
      <div className='cont'>
        <section className='signup-Home-Page'>
          <div className='Register-div'>
            <div className='Heading-tag'>

              <h1 className='signup-laundry-heading'>Laundry</h1>
              <h1 className='signup-laundry-heading'>Service</h1>

            </div>
            <div className='para-tag'>

              <p>Doorstep Wash & Dryclean Service</p>

            </div>
            <div className='para-tag-2'>

              <p style={{ fontSize: '13px' }}>Already Have An Account</p>

            </div>
            <div className='btn-tag'>

              <button style={{ borderRadius: '3px', width: '100px', height: '40px', border: '1px solid #5861AE' }}><Link to={'/'} style={{ textDecoration: 'none', color: ' #5861AE' }}>Sign In</Link></button>

            </div>
          </div>
        </section>

        <section className='Signup-Home-Page'>
          <div className='Signup-div'>
            <form >
              <div className='para-sign-in-div'>Register</div>
              <div className='text-div'>

                <input type="text" placeholder='Name' required onChange={(e) => { handleInput(e) }} name='name' className='input-class' />
                <input type="email" placeholder='Email' required onChange={(e) => { handleInput(e) }} name='email' className='email-class' />
              </div>
              <div className='password-div'>
                <input type="Number" placeholder='Number' required onChange={(e) => { handleInput(e) }} name='phone' className='input-class' />
                <input type='text' placeholder='State' required onChange={(e) => { handleInput(e) }} name='state' className='email-class' />
              </div>
              <div className='password-div'>
                <input type="text" placeholder='District' required onChange={(e) => { handleInput(e) }} name='district' className='input-class' />
                <input type='text' placeholder='Address' required onChange={(e) => { handleInput(e) }} name='address' className='email-class' />
              </div>
              <div className='password-div'>
                <input type="Number" placeholder='Pincode' required onChange={(e) => { handleInput(e) }} name='pincode' className='input-class' />
                <input type='Password' placeholder='Password' required onChange={(e) => { handleInput(e) }} name='password' className='email-class' />
              </div>
              <div className='checkbox-div'>
                <input type={'checkbox'} checked={userDetails.terms} onChange={(e) => { setUSerDetails({ ...userDetails, terms: !userDetails.terms }) }}
                  required style={{ marginLeft: '100px', marginTop: '50px' }} /><span style={{ marginLeft: '10px', color: '#5861AE' }}>I agree to Terms & Conditions Receiving Marketing and Promotional Materials</span>
              </div>
              <div className='signup-in-btn-div'>
                <button type='submit' disabled={userDetails.terms ? false : true} className='sign-in-btn' onClick={(e) => { signup(e) }}
                  style={{ borderRadius: '3px', width: '90px', height: '40px', backgroundColor: ' #4552C1 ', border: 'none', color: 'white' }}>
                  Register</button>
              </div>
            </form >
          </div>
        </section>
      </div >
    </div >
  )
}
