import React from 'react';
import './Header.css';

const Header = ({Favorites}) => {
  return(
    <div className='header'>
      <div className='btn-container'>
        <button className='favorite-btn'>Favorites {Favorites.length}</button>
      </div>
      <h1>Chalmun's Cantina</h1>
    </div>
  )
}

export default Header