import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Login.css'
export default function Login() {
  return (
    <div>
      <div className='cont'>
        <section className='Register-Home-Page'>
          <div className='Register-div'>
            <div className='Heading-tag'>

              <h1 className='laundry-heading'>Laundry</h1>
              <h1 className='laundry-heading'>Service</h1>

            </div>
            <div className='para-tag'>

              <p>Doorstep Wash & Dryclean Service</p>

            </div>
            <div className='para-tag-2'>

              <p>Don't Have An Account?</p>

            </div>
            <div className='btn-tag'>

              <button style={{ borderRadius: '3px', width: '110px',height:'40px',border:'1px solid #5861AE' }}><Link to={'/Signup'} style={{ textDecoration: 'none', color: ' #5861AE' }}>Register</Link></button>

            </div>
          </div>
        </section>

        <section className='Signin-Home-Page'>
          <div className='Signin-div'>
            <div className='para-sign-in-div'>SIGN IN </div>
            <div className='text-div'>
              <input type="text" placeholder='Email / Mobile' className='signin-input-class' />
            </div>
            <div className='password-div'>
              <input type="password" placeholder='Password' className='signin-input-class' />
              <p className='forget-password-class' style={{color:'#4552C1'}}>Forget Password?</p>
            </div>
            <div className='sign-in-btn-div'>
              <button className='sign-in-btn' style={{ borderRadius: '3px', width: '90px',height:'40px' ,backgroundColor: ' #4552C1 ',border:'none' }}><Link to={'/Create'} style={{ textDecoration: 'none', color: 'white' }}>Sign in</Link></button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
