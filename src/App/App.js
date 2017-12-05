import React, { Component } from 'react';
import './App.css';
import ScrollingOpening from './ScrollingOpening/ScrollingOpening'
import Header from './Header/Header'
import MainSection from './MainSection/MainSection'

class App extends Component {
  constructor(){
    super();
    this.state={
      OpeningCrawl: '',
      Favorites: []
    }
  }
  
  componentDidMount() {
    this.getData();
  }

  getData() {
    const randomNumber = Math.floor(Math.random()*(7-1))+1
    // fetch(`https://swapi.co/api/films/${randomNumber}/`)
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //   this.setState({OpeningCrawl: {body: data.opening_crawl, title: data.title}
    //   })
    // })
  }
      
  

  render() {
    return (
      <div className="App">
       {/* <ScrollingOpening OpeningCrawl={this.state.OpeningCrawl} /> */}
       <Header Favorites={this.state.Favorites}/>
       <MainSection />
      </div>
    );
  }
}

export default App;
