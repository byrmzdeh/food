import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="pul">
            <h1>Pulse</h1>
            <span>.</span>
        </div>
        <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/add'}>Add Page</NavLink></li>
            <li><NavLink to={'/basket'}>Basket</NavLink></li>
            <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar