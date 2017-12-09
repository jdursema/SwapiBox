import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({Favorites, displayFavorites}) => {
  return (
    <div className='header'>
      <div className='btn-container'>
        <button 
          onClick={()=>displayFavorites()} className='favorite-btn'>Favorites {Favorites.length}</button>
      </div>
      <h1>Return of the SwapiBox</h1>
    </div>
  );
};

export default Header;

Header.propTypes = {
  Favorites: PropTypes.array,
  displayFavorites: PropTypes.func
};