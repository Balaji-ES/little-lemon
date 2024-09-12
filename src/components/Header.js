import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import Nav from './Nav';
import "../assets/styles/header.css";

const Header = () => {

  const headerRef = useRef();
  const handleScroll = (e) => {
    const header = headerRef.current;
    console.log(window.scrollY)
    if(window.scrollY > 150) {
      header.style.transform = "translateY(-200px)";
    } else {
      header.style.transform = "translateY(0)";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className='header-container' ref={headerRef}>
        <Link to='/'><img src={logo} alt="Little Lemon"/></Link>
        <Nav />
    </header>
  )
}

export default Header;