import React from 'react'
import './MainSection.css'
import CardContainer from './CardContainer/CardContainer'

const MainSection = ({fetchCharacterCardInfo, fetchVehicleCardInfo, fetchPlanetCardInfo, cardsInfo}) => {
  return (
    <div className='main-section'>
      <div className= 'btn-bar'>
        <button className='People button' onClick={()=>{fetchCharacterCardInfo()}}>People</button>
        <button className='Vehicles button' onClick={()=>{fetchVehicleCardInfo()}}>Vehicles</button>
        <button className='Planets button' onClick={()=>{fetchPlanetCardInfo()}}>Planets</button>

      </div>
      <CardContainer cardsInfo = {cardsInfo} />
    </div>
  )
}

export default MainSection