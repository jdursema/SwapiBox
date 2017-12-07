import React from 'react';
import './Card.css';

const Card= ({info, addToFavorites}) => {
  const keys= Object.keys(info.data)
  const mappedInfo = keys.map((category)=>{
   return <p>{category}: {info.data[category]}</p>
  })

  return(
    <div className='card'>
      <button className='fav-btn' onClick={()=>addToFavorites(info)}>Fav?</button>
      <h2 className='name'>{info.name}</h2>
      <div className='additional-info'>
        {mappedInfo}
      </div>
    </div>
    
  )
}

export default Card