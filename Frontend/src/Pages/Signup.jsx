import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Signup.css'


export default function Signup() {
  
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

              <p style={{fontSize:'13px'}}>Already Have An Account</p>

            </div>
            <div className='btn-tag'>

              <button style={{ borderRadius: '3px', width: '100px' ,height:'40px',border:'1px solid #5861AE'}}><Link to={'/'} style={{ textDecoration: 'none', color: ' #5861AE' }}>Sign In</Link></button>

            </div>
          </div>
        </section>

        <section className='Signup-Home-Page'>
        <div className='Signup-div'>
            <div className='para-sign-in-div'>Register</div>
            <div className='text-div'>
              <input type="text" placeholder='Name' className='input-class' />
              <input type="email" placeholder='Email' className='email-class'/>
            </div>
            <div className='password-div'>
              <input type="Number" placeholder='Number' className='input-class' />
              <input type='text' placeholder='State' className='email-class'/>
            </div>
            <div className='password-div'>
              <input type="text" placeholder='District' className='input-class' />
              <input type='text' placeholder='Address' className='email-class'/>
            </div>
            <div className='password-div'>
              <input type="Number" placeholder='Pincode' className='input-class' />
              <input type='Password' placeholder='Password' className='email-class'/>
            </div>
            <div className='checkbox-div'>
              <input type={'checkbox'} style={{marginLeft:'100px',marginTop:'50px'}}/><span style={{marginLeft:'10px',color:'#5861AE'}}>I agree to Terms & Conditions Receiving Marketing and Promotional Materials</span>
            </div>
            <div className='signup-in-btn-div'>
              <button className='sign-in-btn' style={{ borderRadius: '3px', width: '90px',height:'40px', backgroundColor: ' #4552C1 ',border:'none' }}><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Register</Link></button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
