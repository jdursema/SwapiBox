import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ Favorites, displayFavorites }) => {
  return (
    <div className='header'>
      <div className='btn-container'>
        <button onClick={()=>displayFavorites()} className='favorite-btn'>
          Favorites {Favorites.length}
        </button>
      </div>
      <img src='https://c.tribune.com.pk/2015/03/853137-starwars-1426319002-513-640x480.jpg'/>
      <h1>Return of the Swapi Box</h1>
    </div>
  );
};

export default Header;

Header.propTypes = {
  Favorites: PropTypes.array,
  displayFavorites: PropTypes.func
};