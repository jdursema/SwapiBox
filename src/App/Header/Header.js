import React from 'react';
import './Header.css';

const Header = ({Favorites, displayFavorites}) => {
  return(
    <div className='header'>
      <div className='btn-container'>
        <button onClick={()=>displayFavorites()} className='favorite-btn'>Favorites {Favorites.length}</button>
      </div>
      <h1>Chalmun's Cantina</h1>
    </div>
  )
}

export default Header