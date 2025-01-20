import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../../assets/assets'

const LoginPopup = ({setshowlogin}) => {

      const[currentstate,setcurrentstate] = useState("Login")
  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentstate}</h2>
            <img onClick={() => setshowlogin(false)} src={assets.cross_icon}></img>

        </div>
        <div className="login-popup-inputs">
            {currentstate==="login"?<></>:<input type="text" placeholder='Your Name' required />}
            
            <input type="email" placeholder='Your Email' required />
            <input type="password"  placeholder='Password' required/>
        </div>
        <button >{currentstate==="sign up"?"Craete A Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continuing, I Agree TO the Terms Of Use & Privacy Policy.</p>
        </div>
        {currentstate==="login"
         ?<p>Create A New Acount ?<span onClick={()=>setcurrentstate("sign Up")}>Click Here</span></p>:
         <p>Already Have An Account <span onClick={()=>setcurrentstate("login")}>Login Here</span></p>
        }
       
       
      </form>
    </div>
  )
}

export default LoginPopup
