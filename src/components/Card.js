import React from 'react'
import deliveryIcon from '../assets/img/delivery-icon.svg';
import '../assets/styles/card.css';

const Card = ({imageName, name, price, description}) => {
    return (
    <div className='card-container'>
        <div>
            <img src={require(`../assets/img/${imageName}`)} alt={name} />
            <div className='card-content'>
                <div className='card-title'>
                    <span>{name}</span>
                    <span>{`$ ${price}`}</span>
                </div>
                <div className='card-description'>
                    {description}
                </div>
            </div>
        </div>
        <div className='card-links'>
            Order a delivery
            <img src={deliveryIcon} alt="delivery icon"/>
        </div>
    </div>
    )
}

export default Card