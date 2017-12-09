import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
import PropTypes from 'prop-types';


const CardContainer = ( { cardsInfo, addToFavorites } ) => {
  const mappedCards = cardsInfo.map((card, index)=>{
    return <Card key={index} info={card} addToFavorites={addToFavorites}/>;
  });

  return (
    <div className='card-container'>
      {mappedCards}
    </div>
   
  );
};

export default CardContainer;

CardContainer.propTypes = {
  cardsInfo: PropTypes.array,
  addToFavorites: PropTypes.func
};