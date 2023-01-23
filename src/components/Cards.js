import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Crafting Exceptional Websites, One Line of Code at a Time</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='public/images/aboutus.png'
              text='Meet the man behind the brand'
              label='About us'
              path='/about'
            />
            <CardItem
              src='public/images/img5.jpg'
              text='Maximize your online reach with our digital solutions'
              label='Our Services'
              path='/services'
            />
          </ul>
       
         
        </div>
      </div>
    </div>
  );
}

export default Cards;
