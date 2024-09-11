import React from 'react';
import Card from './Card';
import '../assets/styles/menu.css';

const Menu = () => {

    const menuItems = [
        {
            name: "Greek salad",
            price: "12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            imageName: "greek-salad.jpg"
        },
        {
            name: "Bruchetta",
            price: "7.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            imageName: "bruchetta.svg"
        },
        {
            name: "Lemon Dessert",
            price: "6.99",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            imageName: "lemon-dessert.jpg"
        }
    ];

    return (
    <div id='menu' className='menu-container'>
        <div>
            <h2>This weeks specials!</h2>
            <button className='standard-btn'>Online Menu</button>
        </div>
        <div className='three-col'>
            {
                menuItems.map((menuItem, index) => <Card key={index} imageName={menuItem.imageName} name={menuItem.name} price={menuItem.price} description={menuItem.description} />)
            }
        </div>
    </div>
    )
}

export default Menu