import React, { Component } from 'react';
import './App.css';
import ScrollingOpening from '../ScrollingOpening/ScrollingOpening';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import { fetchCharacterInfo } from '../helpers/helper';
import { fetchVehicleInfo } from '../helpers/helper2';
import { fetchPlanetInfo } from '../helpers/helper3';
import { fetchscrollingOpening } from '../helpers/helper4';

class App extends Component {
  constructor() {
    super();
    this.state = {
      OpeningCrawl: {},
      Favorites: [],
      Cards: [],
      People: [],
      Vehicles: [],
      Planets: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async() => {
    const randomNumber = Math.floor(Math.random()*(7-1))+1;
    const movieObj= await fetchscrollingOpening(randomNumber);
    this.setState({OpeningCrawl: movieObj});
  };

  fetchCharacterCardInfo = async () => {
    if (this.state.People.length === 0) {
      const people = await fetchCharacterInfo();
      this.setState({People: people});
    }
    this.setState({Cards: this.state.People});
  }

  fetchVehicleCardInfo = async () => {
    if (this.state.Vehicles.length === 0) {
      const vehicleObjArray = await fetchVehicleInfo();
      this.setState({Vehicles: vehicleObjArray});
    }
    this.setState({Cards: this.state.Vehicles});
  }

  fetchPlanetCardInfo = async () => {
    if (this.state.Planets.length === 0) {
      const planetObjArray = await fetchPlanetInfo();
      this.setState({Planets: planetObjArray});
    }
    this.setState({Cards: this.state.Planets});   
  }

  addToFavorites = ( infoObj ) => {
    let checkForDup = this.state.Favorites.filter((Obj)=>{
      return Obj.name === infoObj.name;
    });

    if (checkForDup < 1) {
      const favoritedArray = [...this.state.Favorites, infoObj];
      this.setState({Favorites: favoritedArray});
    } else {
      const removedItemArray = this.state.Favorites.filter((Obj)=>{
        return Obj.name !== infoObj.name;
      });
      this.setState({Favorites: removedItemArray});
    } 
  }

  displayFavorites = () =>{
    this.setState({Cards: this.state.Favorites});
  }


      
  render() {
    return (
      <div className="App">
        {/* <ScrollingOpening 
          OpeningCrawl={this.state.OpeningCrawl}
        /> */}
        <Header 
          Favorites={this.state.Favorites} 
          displayFavorites={this.displayFavorites}
        />
        <MainSection 
          fetchCharacterCardInfo={this.fetchCharacterCardInfo} 
          fetchVehicleCardInfo={this.fetchVehicleCardInfo} 
          fetchPlanetCardInfo={this.fetchPlanetCardInfo} 
          cardsInfo={this.state.Cards} 
          addToFavorites={this.addToFavorites} 
          Favorites={this.state.Favorites}  
        />
      </div>
    );
  }
}

export default App;