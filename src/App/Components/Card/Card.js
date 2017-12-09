import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card= ({info, addToFavorites}) => {
  const keys= Object.keys(info.data);
  const mappedInfo = keys.map((category, index)=>{
    return <p key={index}> {category}: {info.data[category]} </p>;
  });

  return (
    <div className='card'>
      <button className='fav-btn' onClick={()=>addToFavorites(info)}>
        Fav?
      </button>
      <h2 className='name'>{info.name}</h2>
      <div className='additional-info'>
        {mappedInfo}
      </div>
    </div>
    
  );
};

export default Card;

Card.propTypes = {
  info: PropTypes.object,
  addToFavorites: PropTypes.func
};