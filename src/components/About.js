import React from 'react';
import aboutImg from '../assets/img/about.jpg';
import '../assets/styles/about.css';

const About = () => {
    return (
    <div id='about' className='about-container'>
        <div>
            <h2>Little Lemon</h2>
            <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
            <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
        </div>
        <div>   
            <img src={aboutImg} alt='Little lemon chefs' />
        </div>
    </div>
    )
}

export default About