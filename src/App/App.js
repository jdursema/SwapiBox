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
      People: [],
      Favorites: [],
      OpeningCrawl: {},
      Vehicles: []
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
    this.setState({People: people})
  }

 

  fetchHomePlanet = (characterArray) => {
    const unresolvedPromises = characterArray.map(async (character) =>{
      let homeworldFetch = await fetch(character.homeworld)
      let homeworldData = await homeworldFetch.json()
      let speciesFetch = await fetch(character.species)
      let speciesData = await speciesFetch.json()
      return {name: character.name, homeworld: homeworldData.name, population: homeworldData.population, species: speciesData.name}
    })
    return Promise.all(unresolvedPromises)
  }

  fetchVehicleCardInfo = async () => {
    const fetchVehicles = await fetch (`https://swapi.co/api/vehicles/`)
    const vehicleData = await fetchVehicles.json()
    const vehicleObjArray = await this.createVehicleObj(vehicleData.results)
    this.setState({Vehicles: vehicleObjArray})
  }

  createVehicleObj = (vehicleArray) => {
    const unresolvedPromises = vehicleArray.map( (vehicle) => {
      return {name: vehicle.name, model: vehicle.model, class: vehicle.vehicle_class, capacity: vehicle.passengers}
    })
    return Promise.all(unresolvedPromises)
  }

  fetchPlanetCardInfo = () => {
    console.log(4)
  }


      
  

  render() {
    return (
      <div className="App">
       {/* <ScrollingOpening OpeningCrawl={this.state.OpeningCrawl} /> */}
       <Header Favorites={this.state.Favorites}/>
       <MainSection fetchCharacterCardInfo={this.fetchCharacterCardInfo} fetchVehicleCardInfo={this.fetchVehicleCardInfo} fetchPlanetCardInfo={this.fetchVehicleCardInfo} />
      </div>
    );
  }
}

export default App;
