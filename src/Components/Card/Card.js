import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';


const Card= ({info, addToFavorites, type}) => {
  const keys= Object.keys(info.Data);
  const mappedInfo = keys.map((category, index)=>{
    return <p key={index}> <strong>{category}</strong>: {info.Data[category]} </p>;
  });

  return (
    <div className={`${info.type} ${type}`}>
      <div className='icon'></div>
      <div className='top-section'>
        <h2 className='name'>{info.name}</h2>
      </div>
      <div className='additional-info'>
        {mappedInfo}
      </div>
      <button className='fav-btn' onClick={()=>addToFavorites(info)}>Favorite</button>
    </div> 
  );
};

export default Card;

Card.propTypes = {
  type: PropTypes.string,
  info: PropTypes.object,
  addToFavorites: PropTypes.func
};