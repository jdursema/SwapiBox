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
      Cards: [],
      People: [],
      Vehicles: [],
      Planets: []
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
    if(this.state.People.length === 0){
      const fetchPeople = await fetch (`https://swapi.co/api/people/`)
      const peopleData = await fetchPeople.json()
      const people = await this.fetchHomePlanet(peopleData.results)
      this.setState({People: people})
    }
    this.setState({Cards: this.state.People})
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
    if(this.state.Vehicles.length === 0){
      const fetchVehicles = await fetch (`https://swapi.co/api/vehicles/`)
      const vehicleData = await fetchVehicles.json()
      const vehicleObjArray = await this.createVehicleObj(vehicleData.results)
      this.setState({Vehicles: vehicleObjArray})
    }
    this.setState({Cards: this.state.Vehicles})
    
  }

  createVehicleObj = (vehicleArray) => {
    const unresolvedPromises = vehicleArray.map( (vehicle) => {
      return {name: vehicle.name, data: {model: vehicle.model, class: vehicle.vehicle_class, capacity: vehicle.passengers}}
    })
    return Promise.all(unresolvedPromises)
  }

  fetchPlanetCardInfo = async () => {
    if (this.state.Planets.length === 0){
      const fetchPlanets = await fetch (`https://swapi.co/api/planets/`)
      const planetsData = await fetchPlanets.json()
      const planetObjArray = await this.createPlanetObj(planetsData.results)
      this.setState({Planets: planetObjArray})
    }
    this.setState({Cards: this.state.Planets})
    
  }

  createPlanetObj =  (planetArray) => {
    const unresolvedPromises = planetArray.map( async (planet) => {
      const fetchResidents = await this.fetchResidents(planet.residents)
      return {name: planet.name, data: {terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: fetchResidents.join(',\n')}}
    })

    return Promise.all(unresolvedPromises)
  }

  fetchResidents = (apiArray) => {
    const unresolvedPromises = apiArray.map(async (api)=>{
      const fetchResident = await fetch(api)
      const residentData = await fetchResident.json()
      return residentData.name
    }) 
    
    return Promise.all(unresolvedPromises)
  }

  addToFavorites = (infoObj) => {
    let checkForDup = this.state.Favorites.filter((Obj)=>{
      return Obj.name === infoObj.name
    })

    if(checkForDup < 1){
      const favoritedArray = [...this.state.Favorites, infoObj]
      this.setState({Favorites: favoritedArray})
    } else{
      const removedItemArray = this.state.Favorites.filter((Obj)=>{
        return Obj.name != infoObj.name
      })
      this.setState({Favorites: removedItemArray})
    }
   
  }

  displayFavorites = () =>{
    this.setState({Cards: this.state.Favorites})
  }
      
  

  render() {
    return (
      <div className="App">
       {/* <ScrollingOpening OpeningCrawl={this.state.OpeningCrawl} /> */}
       <Header Favorites={this.state.Favorites} displayFavorites={this.displayFavorites}/>
       <MainSection fetchCharacterCardInfo={this.fetchCharacterCardInfo} fetchVehicleCardInfo={this.fetchVehicleCardInfo} fetchPlanetCardInfo={this.fetchPlanetCardInfo} cardsInfo={this.state.Cards} addToFavorites={this.addToFavorites}  />
      </div>
    );
  }
}

export default App;
