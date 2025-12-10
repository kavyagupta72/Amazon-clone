import React from 'react'
import './Login.css'
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="login">
        <Link to="/">
        <img className='login__logo'
            src="https://www.pngall.com/wp-content/uploads/13/Amazon-Logo-PNG.png" 
        />
        </Link>
        <div className='login__container'>
          <h1>
            Sign-In
          </h1>
          <form>
            <h5>E-Mail</h5>
            <input type='text' />

            <h5>Password</h5>
            <input type='password' />

            <button className='login__signInButton' type='submit'>
              Sign In
            </button>

            <p>
              By signing-in you agree to Amazon's Fake Clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button className="login__registerButton">
              Create Your Amazon Account
            </button>
          </form>
        </div>
    </div>
  )
}

export default Login
