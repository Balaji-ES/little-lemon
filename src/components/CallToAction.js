import React from 'react';
import { Link } from "react-router-dom";
import CallToActionImg from '../assets/img/call-to-action.jpg';
import '../assets/styles/calltoaction.css';

const CallToAction = () => {
  return (
    <div className='call-to-action-container'>
        <div className='content-item-1'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className='actionable-text'>
                We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button className='standard-btn'>
              <Link to='/booking'>Reserve a Table</Link>
            </button>
        </div>
        <div className='content-item-2'>
            <img src={CallToActionImg} alt='Bruchetta plated on wooden slate' />
        </div>
    </div>
  )
}

export default CallToAction