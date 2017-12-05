import React, { Component } from 'react';
import './App.css';
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import MainSection from '../MainSection/MainSection'

class App extends Component {
  render() {
    return (
      <div className="App">
       <SideBar />
       <Header/>
       <MainSection />
      </div>
    );
  }
}

export default App;
