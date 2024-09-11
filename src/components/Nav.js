import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/nav.css';

const Nav = () => {
  return (
    <nav className='nav-container'>
        <ul> 
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><a href='/#menu'>Menu</a></li>
            <li><Link to='/booking'>Reservations</Link></li>
            {/* <li><a href='#'>Order Online</a></li>
            <li><a href='#'>Login</a></li> */}
        </ul>
    </nav>
  )
}

export default Nav