import React from 'react';
import Card from './Card/Card';
import './CardContainer.css';

const CardContainer = ({cardsInfo, addToFavorites}) => {
  const mappedCards = cardsInfo.map((card)=>{
    return <Card info={card} addToFavorites={addToFavorites}/>
  })

  return(
    <div className='card-container'>
      {mappedCards}
    </div>
   
  )
    
  
}

export default CardContainer