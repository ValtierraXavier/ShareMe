import React, {useState, useEffect} from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'

export default function Nav({HandleLoginModal}) {
    const name = 'Xavier'
    const[modalOpen, setModalOpen] = useState(false)

  return (
    <div className = 'navContainer'>
        <div className = 'navUserDetail'>
            <NavLink to = '/user'>
                <img height = "45rem" src='https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg'></img>
            </NavLink>
            <NavLink to = '/user'>
                <div>Hello {name}</div>
            </NavLink>
        </div>
        <div onClick ={HandleLoginModal} className = 'signInButtons'>
            <div className = 'signInButton'>Sign In</div>
            <Link to='/signup' className = 'signUpButton' href ="https://google.com" target = '_blank'>Sign Up</Link>
        </div>
    </div>
  )
}
