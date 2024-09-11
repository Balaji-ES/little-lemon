import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../assets/img/footer.jpg';
import '../assets/styles/footer.css';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='four-col'>
        <div className='col-1'>
          <img src={footerImg} />
        </div>
        <div className='col-2'>
          <h3>Little Lemon</h3>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><a href='/#menu'>Menu</a></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/booking'>Reservations</Link></li>
            {/* <li>Order online</li>
            <li>Login</li> */}
          </ul>
        </div>
        <div className='col-3'>
          <h3>Contact</h3>
          <p>
            <i>
              Little Lemon
              331 E Chicago
              LaSalle Street Chicago,
              Illinois 60602
              USA
            </i>
          </p>
          <p>
            <a href='tel:+55 11 9999-9999' target='_blank'>+55 11 9999-9999</a>
          </p>
          <p>
            <a href='mailto:contact@littlelemon.com' target='_blank'>contact@littlelemon.com</a>
          </p>
        </div>
        <div className='col-4'>
          <h3>Socials</h3>
          <ul>
            <li><a href='https://www.facebook.com/littlelemon' target='_blank'>Facebook</a></li>
            <li><a href='https://www.instagram.com/littlelemon' target='_blank'>Instagram</a></li>
            <li><a href='https://twitter.com/littlelemon' target='_blank'>Twitter</a></li>
          </ul>
        </div>
      </div>
      <div>
        <p>Developed by Srikara Ranganath.</p>
        <p>{`© ${currentYear} Little Lemon. All rights reserved.`}</p>
      </div>
    </footer>
  );
}

export default Footer;