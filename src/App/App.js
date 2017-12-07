import React, { Component } from 'react';
import './App.css';
import ScrollingOpening from './ScrollingOpening/ScrollingOpening'
import Header from './Header/Header'
import MainSection from './MainSection/MainSection'
import { debug } from 'util';
import { spawn } from 'child_process';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

class App extends Component {
  constructor(){
    super();
    this.state={
      Favorites: [],
      Cards: []
    }
  }
  
  componentDidMount() {
    this.getData();
  }

  getData() {
    // const randomNumber = Math.floor(Math.random()*(7-1))+1
    // fetch(`https://swapi.co/api/films/${randomNumber}/`)
    // .then (res => res.json())
    // .then (data => {
    //   const lineBreak = new RegExp(/\s{3,}/, 'g')
    //   const convertLineBreaks= data.opening_crawl.replace(lineBreak, '###')
    //   const splitCovertedBreaks = convertLineBreaks.split('###')
    //   this.setState({OpeningCrawl: {body: splitCovertedBreaks, title: data.title}
    //   })
    // })
  }

  fetchCharacterCardInfo = async () => {
    const fetchPeople = await fetch (`https://swapi.co/api/people/`)
    const peopleData = await fetchPeople.json()
    const people = await this.fetchHomePlanet(peopleData.results)
    this.setState({Cards: people})
  }

 

  fetchHomePlanet = (characterArray) => {
    const unresolvedPromises = characterArray.map(async (character) =>{
      let homeworldFetch = await fetch(character.homeworld)
      let homeworldData = await homeworldFetch.json()
      let speciesFetch = await fetch(character.species)
      let speciesData = await speciesFetch.json()
      return {name: character.name, data: { homeworld: homeworldData.name, population: homeworldData.population, species: speciesData.name}}
    })
    return Promise.all(unresolvedPromises)
  }

  fetchVehicleCardInfo = async () => {
    const fetchVehicles = await fetch (`https://swapi.co/api/vehicles/`)
    const vehicleData = await fetchVehicles.json()
    const vehicleObjArray = await this.createVehicleObj(vehicleData.results)
    this.setState({Cards: vehicleObjArray})
  }

  createVehicleObj = (vehicleArray) => {
    const unresolvedPromises = vehicleArray.map( (vehicle) => {
      return {name: vehicle.name, data: {model: vehicle.model, class: vehicle.vehicle_class, capacity: vehicle.passengers}}
    })
    return Promise.all(unresolvedPromises)
  }

  fetchPlanetCardInfo = async () => {
    const fetchPlanets = await fetch (`https://swapi.co/api/planets/`)
    const planetsData = await fetchPlanets.json()
    const planetObjArray = await this.createPlanetObj(planetsData.results)
    this.setState({Cards: planetObjArray})
  }

  createPlanetObj =  (planetArray) => {
    const unresolvedPromises = planetArray.map( async (planet) => {
      const fetchResidents = await this.fetchResidents(planet.residents)
      return {name: planet.name, data: {terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: fetchResidents}}
    })

    return Promise.all(unresolvedPromises)
  }

  fetchResidents = (apiArray) =>{
    const unresolvedPromises = apiArray.map(async (api)=>{
      const fetchResident = await fetch(api)
      const residentData = await fetchResident.json()
      return residentData.name
    }) 
    
    return Promise.all(unresolvedPromises)
  }


      
  

  render() {
    return (
      <div className="App">
       {/* <ScrollingOpening OpeningCrawl={this.state.OpeningCrawl} /> */}
       <Header Favorites={this.state.Favorites}/>
       <MainSection fetchCharacterCardInfo={this.fetchCharacterCardInfo} fetchVehicleCardInfo={this.fetchVehicleCardInfo} fetchPlanetCardInfo={this.fetchPlanetCardInfo} cardsInfo={this.state.Cards}/>
      </div>
    );
  }
}

export default App;
