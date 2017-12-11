import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {   
  it('should be defined', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true});  
    expect(renderedApp).toBeDefined();
  });

  it('should have a default state', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true}); 

    expect(renderedApp.state('OpeningCrawl')).toEqual({});
    expect(renderedApp.state('Favorites')).toEqual([]);
    expect(renderedApp.state('Cards')).toEqual([]);
    expect(renderedApp.state('People')).toEqual([]);
    expect(renderedApp.state('Vehicles')).toEqual([]);
    expect(renderedApp.state('Planets')).toEqual([]);
  });

  it('should match the its snapshot', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true}); 

    expect(renderedApp).toMatchSnapshot();
  });

  it('should add a card to the states favorites array when add to Favorites is called', () => {
    const mockObj = {name: 'Julie', Data: {Homeworld: 'Earth'}};
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true});

    renderedApp.instance().addToFavorites(mockObj);

    expect(renderedApp.state('Favorites')).toEqual([mockObj]);
  });

  it('should display the favorite cards when display favorites is called', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true});
    const mockObj = {name: 'Julie', Data: {Homeworld: 'Earth'}}
    renderedApp.setState({Favorites: [mockObj]});

    renderedApp.instance().displayFavorites(mockObj);

    expect(renderedApp.state('Cards')).toEqual([mockObj]);
  });

});

