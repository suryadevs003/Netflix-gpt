import React from 'react'
import { Link } from 'react-router-dom';

const  Login =()=>{
  return (
    <>
    <div className='flex '>
        <ul className='font-mono '>
        <li>
            <Link to="/" className='text-red-700 text-4xl'>NETFLIX</Link> 
        </li>
        <li>
            <Link to="/Login1" className='bg-red-700  text-white text-2xl rounded-10px p-1' >Sign In </Link> 
        </li> 
        </ul>
    </div>
    <div>
        <h2>Unlimited movies, TV shows and more</h2>
        <h4>Starts at ₹149. Cancel at any time.</h4>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
    </div>
    <form action="">
        <input type="text" placeholder='Email address' className='border ' />
        <button>Get Started </button>
    </form>
    </>
  )
}

export default Login