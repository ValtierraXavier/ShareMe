import React, { useState } from 'react'
import './SignupPage.css'

export default function SignupPage() {
    const[name, setName] = useState('')
    const[userName, setUserName] = useState('')
    const[password,setPassword] = useState('')
    const[passwordConfirm, setPasswordConfirm] = useState('')
  return (
    <div className='signupPageContainer'>
        <h2>Sign Up!</h2>
        <form className='signupForm'>
            <input type='text' className='signupInput' id='signupNameInput' onChange={(e)=>setName(prev=>prev=e.target.value)} value={name}></input>
            <input type='text' className='signupInput' id='signupNameInput' onChange={(e)=>setUserName(prev=>prev=e.target.value)} value={userName}></input>
            <input type='text' className='signupInput' id='signupNameInput' onChange={(e)=>setPassword(prev=>prev=e.target.value)} value={password}></input>
            <input type='text' className='signupInput' id='signupNameInput' onChange={(e)=>setPasswordConfirm(prev=>prev=e.target.value)} value={passwordConfirm}></input>
            <input type='submit' className='signupInput' id='signupButton'></input>
        </form>
    </div>
  )
}
