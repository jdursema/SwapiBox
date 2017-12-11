import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';


const Card= ({info, addToFavorites, type}) => {
  const keys= Object.keys(info.Data);
  const mappedInfo = keys.map((category, index)=>{
    return <p key={index}> {category}: {info.Data[category]} </p>;
  });

  return (
    <div className={`${info.type} ${type}`} onClick={()=>addToFavorites(info)}>
      <div className='top-section'>
        <h2 className='name'>{info.name}</h2>
      </div>
      <div className='additional-info'>
        {mappedInfo}
      </div>
    </div> 
  );
};

export default Card;

Card.propTypes = {
  type: PropTypes.string,
  info: PropTypes.object,
  addToFavorites: PropTypes.func
};