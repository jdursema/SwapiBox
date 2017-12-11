import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  const mockFunc = jest.fn();
  const favorites =
    [{name: 'Julie', Data:{Homeworld: 'earth'}}, 
      {name: 'Pluto', Data:{Residents: 'Goofy'}}];
  const header = shallow(<Header Favorites={favorites} displayFavorites={mockFunc}/>);

  expect(header).toBeDefined();
});

it('should match snap shot', () => {
  const mockFunc = jest.fn();
  const favorites =
    [{name: 'Julie', Data:{Homeworld: 'earth'}}, 
      {name: 'Pluto', Data:{Residents: 'Goofy'}}];
  const header = shallow(<Header Favorites={favorites} displayFavorites={mockFunc}/>);

  expect(header).toMatchSnapshot();
});


it('should call the display favorites function after the favorite button has been clicked', () =>{
  const mockFunc = jest.fn();
  const favorites =
    [{name: 'Julie', Data:{Homeworld: 'earth'}}, 
      {name: 'Pluto', Data:{Residents: 'Goofy'}}];
  const header = shallow(<Header Favorites={favorites} displayFavorites={mockFunc}/>);
  const button = header.find('button');

  expect(mockFunc.mock.calls.length).toEqual(0);
  
  button.simulate('click');
  
  expect(mockFunc.mock.calls.length).toEqual(1);
});