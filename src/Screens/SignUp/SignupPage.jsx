import React, { useEffect, useState } from 'react'
import { signUp } from '../../Services/UserServices/UsersServices.js'
import './SignupPage.css'

export default function SignupPage() {
    const[email, setEmail] = useState('')
    const[userName, setUserName] = useState('')
    const[password,setPassword] = useState('')
    const[passwordConfirm, setPasswordConfirm] = useState('')
    const[passMatch, setpassMatch] = useState('Confirm Password')
    
    const handleSignup = async (e)=>{
        e.preventDefault()
        const newUser = {
            email: email,
            userName: userName,
            password: password
        }
        try{
           const userToken = await signUp(newUser)
           console.log(userToken.data)
        //    document.cookie = `token = ${data.data.token}`
        //    console.log(document.cookie)
        }catch(error){console.log(error)}   
    }

    const handlePasswordVerify=()=>{
        const confirmPass = document.getElementById('passwordConfirm')
        const signupSubmit = document.getElementById('signupButton')
        if(passwordConfirm === ''){
            confirmPass.style.color = "black"
            signupSubmit.style.backgroundColor = "white"
            signupSubmit.disabled = true
            setpassMatch(prev=>prev='Confirm Password')
        }else if(password === passwordConfirm){     
            confirmPass.style.color = "green"
            signupSubmit.style.backgroundColor = "green"
            signupSubmit.disabled = false
            setpassMatch(prev=>prev='Passwords Match')
        }else{
            confirmPass.style.color = "red"
            signupSubmit.style.backgroundColor = "red"
            signupSubmit.disabled = true
            setpassMatch(prev=>prev='Passwords do not match')
        }
    }
    useEffect(()=>{
        handlePasswordVerify()
    },[passwordConfirm, password])
  
  return (
    <div className='signupPageContainer'>
        <h2>Sign Up!</h2>
        <form onSubmit={handleSignup} className='signupForm'>
            <label className='formLabels'>Email</label>
            <input type='text' className='signupInput' id='signupNameInput' onChange={(e)=>setEmail(prev=>prev=e.target.value)} value={email}></input>
            <label className='formLabels'>Username</label>
            <input type='text' className='signupInput' id='signupUsernameInput' onChange={(e)=>setUserName(prev=>prev=e.target.value)} value={userName}></input>
            <label className='formLabels'>Password</label>
            <input type='password' className='signupInput' id='signupPasswordInput' onChange={(e)=>setPassword(prev=>prev=e.target.value)} value={password}></input>
            <label className='formLabels' id ='passwordConfirm'>{passMatch}</label>
            {/* <label id= 'passwordWarning'>passwords do not match</label>
            <label id='passwordGood'>they match</label> */}
            <input type='password' className='signupInput' id='signupPasswordConfirmInput' onChange={(e)=>setPasswordConfirm(prev=>prev= e.target.value)} value={passwordConfirm}></input>
            <input type='submit' className='signupInput' id='signupButton'></input>
        </form>
    </div>
  )
}
