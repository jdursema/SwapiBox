import React from 'react';
import './Card.css';

const Card= ({info}) => {
  console.log (info)
  const keys= Object.keys(info.data)
  const mappedInfo = keys.map((category)=>{
   return <p>{category}: {info.data[category]}</p>
  })

  return(
    <div>
      <button>Fav?</button>
      <h2>{info.name}</h2>
      <div>
        {mappedInfo}
      </div>
    </div>
    
  )
}

export default Card