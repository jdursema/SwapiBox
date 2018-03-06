import React from 'react';
import './MainSection.css';
import CardContainer from '../CardContainer/CardContainer';
import PropTypes from 'prop-types';

const MainSection = ({ fetchCharacterCardInfo, fetchVehicleCardInfo, fetchPlanetCardInfo, cardsInfo, addToFavorites, Favorites }) => {
  return (
    <div className='main-section'>
      <div className='btn-bar'>
        <button 
          className='People button' 
          onClick={() => { fetchCharacterCardInfo(); } }>People
        </button>
        <button 
          className='Vehicles button' 
          onClick={() => { fetchVehicleCardInfo(); } }>Vehicles
        </button>
        <button
          className='Planets button' 
          onClick={() => { fetchPlanetCardInfo(); } }>Planets</button>
      </div>

      <CardContainer 
        cardsInfo={cardsInfo} 
        addToFavorites={addToFavorites}
        Favorites={Favorites} />
    </div>
  );
};

export default MainSection;

MainSection.propTypes = {
  fetchCharacterCardInfo: PropTypes.func,
  fetchVehicleCardInfo: PropTypes.func,
  fetchPlanetCardInfo: PropTypes.func,
  cardsInfo: PropTypes.array,
  addToFavorites: PropTypes.func,
  Favorites: PropTypes.array
};