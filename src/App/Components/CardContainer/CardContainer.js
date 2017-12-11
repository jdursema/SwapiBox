import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
import PropTypes from 'prop-types';


const CardContainer = ( { cardsInfo, addToFavorites, Favorites } ) => {
  const mappedCards = cardsInfo.map((card, index)=>{
    if (Favorites.includes(card)){
      return <Card 
        key={index} 
        info={card} 
        addToFavorites={addToFavorites} 
        type='card favorited'/>;
    } else {
      return <Card 
        key={index} 
        info={card} 
        addToFavorites={addToFavorites} 
        type='card'/>;      
    }
  });

  return (
    <div className='card-container'>
      {mappedCards}
    </div>
   
  );
};

export default CardContainer;

CardContainer.propTypes = {
  Favorites: PropTypes.array,
  cardsInfo: PropTypes.array,
  addToFavorites: PropTypes.func
};