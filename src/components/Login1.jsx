import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Login1 = () => {
  const [inSignInForm, setInSignInForm] = useState(true);

  const  toggleInSignInForm = () => {
    setInSignInForm(!inSignInForm);
  }

  return (
    <>
     <div className='flex '>
        <ul className='font-mono '>
        <li>
            <Link to="/" className='text-red-700 text-4xl'>NETFLIX</Link> 
        </li>
        </ul>
    </div>
    
    <div>
    <form  className='w-3/12 p-12 bg-black text-white  my-36 mx-auto right-0 left-0 '>
        <h1 className='font-bold text-3xl py-4'>{inSignInForm?"Sign In":"Sign Up"}</h1>
       
        {!inSignInForm && (
          <input 
            className='p-4 my-4 w-full bg-gray-700 border-stone-400 border-1'
            type="name" 
            placeholder='Full Name'
        /> )} 
         <input 
           className='p-4 my-4 w-full bg-gray-700 border-1 border-stone-400'
           type="text" 
           placeholder='Email or mobile number'
        />
        <input 
            className='p-4 my-4 w-full bg-gray-700 border-stone-400 border-1'
            type="password" 
            placeholder='password'
        />
        <button 
         className='bg-red-800 p-4 my-6 w-full rounded-lg'>
         {inSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className='p-4 cursor-pointer' onClick={toggleInSignInForm}>

        {inSignInForm?"New to Netflix? Sign up now":"Already Registered?"}
        </p>
    </form>
    </div>
    </>
  )
}

export default Login1