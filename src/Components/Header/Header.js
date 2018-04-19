import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ Favorites, displayFavorites }) => {
  return (
    <div className='header'>
      
      <div className='btn-container'>
        <h1>SW(api) Box</h1>
        <button onClick={()=>displayFavorites()} className='favorite-btn'>
          Favorites {Favorites.length}
        </button>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  Favorites: PropTypes.array,
  displayFavorites: PropTypes.func
};