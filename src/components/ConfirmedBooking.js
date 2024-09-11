import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/confirmation.css';

const ConfirmedBooking = ({reservationData}) => {
  return (
    <div className='confirmation-container'>
        <h2>Booking successful !</h2>
        <div className='reservation-data'>
            <div className='content-item'>
                <span>Primary guest name:</span>
                <span>{reservationData["primary-guest-name"]}</span>
            </div>
            <div className='content-item'>
                <span>Booking date:</span>
                <span>{reservationData["booking-date"]}</span>
            </div>
            <div className='content-item'>
                <span>Booking time:</span>
                <span>{reservationData["booking-time"]}</span>
            </div>
            <div className='content-item'>
                <span>Number of guests:</span>
                <span>{reservationData["no-of-guests"]}</span>
            </div>
            <div className='content-item'>
                <span>Occasion:</span>
                <span>{reservationData["occasion"]}</span>
            </div>
        </div>
        <button className='standard-btn'><Link to='/'>Back home</Link></button>
    </div>
  )
}

export default ConfirmedBooking;