import React, { Component } from 'react';
import './App.css';
import ScrollingOpening from './ScrollingOpening/ScrollingOpening';
import Header from './Header/Header';
import MainSection from './MainSection/MainSection';
import { fetchCharacterInfo } from './helper';
import { fetchVehicleInfo } from './helper2';
import { fetchPlanetInfo } from './helper3';


class App extends Component {
  constructor() {
    super();
    this.state = {
      OpeningCrawl: [],
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

  getData() {
    const randomNumber = Math.floor(Math.random()*(7-1))+1;
    fetch(`https://swapi.co/api/films/${randomNumber}/`)
      .then(res => res.json())
      .then(data => {
        const lineBreak = new RegExp(/\s{3,}/, 'g');
        const convertLineBreaks= data.opening_crawl.replace(lineBreak, '###');
        const splitCovertedBreaks = convertLineBreaks.split('###');
        this.setState({OpeningCrawl: {body: splitCovertedBreaks, title: data.title}
        });
      });
  }

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



  addToFavorites = (infoObj) => {
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
        <ScrollingOpening 
          OpeningCrawl={this.state.OpeningCrawl}
        />
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
        />
      </div>
    );
  }
}

export default App;
