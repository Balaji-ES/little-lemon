import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import Nav from './Nav';
import "../assets/styles/header.css";

const Header = () => {

  const headerRef = useRef();

  // window.addEventListener('scroll', () => {
  //   const header = headerRef.current;
  //   console.log(header);
  //   if(window.scrollY > 200) {
  //     header.style.top = "-100px"; 
  //   } else {
  //     header.style.top = "0px";
  //   }
  // });

  return (
    <header className='header-container' ref={headerRef}>
        <Link to='/'><img src={logo} /></Link>
        <Nav />
    </header>
  )
}

export default Header;