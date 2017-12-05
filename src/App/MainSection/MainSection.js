import React from 'react'
import './MainSection.css'
import CardContainer from './CardContainer/CardContainer'

const MainSection = () => {
  return (
    <div className='main-section'>
      <div className= 'btn-bar'>
        <button className='People button'>People</button>
        <button className='Planets button'>Planets</button>
        <button className='Vehicles button'>Vehicles</button>

      </div>
      <CardContainer />
    </div>
  )
}

export default MainSection