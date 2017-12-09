import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  const mockFunc = jest.fn();
  const favorites =[{name: 'Julie', data:{Homeworld: 'earth'}}, {name: 'Pluto', data:{Residents: 'Goofy'}}]
  const wrapper = shallow(<Header Favorites={favorites} displayFavorites={mockFunc}/>)

  expect(wrapper).toBeDefined();
});

it('should match snap shot', () => {
  const mockFunc = jest.fn();
  const favorites =[{name: 'Julie', data:{Homeworld: 'earth'}}, {name: 'Pluto', data:{Residents: 'Goofy'}}]
  const wrapper = shallow(<Header Favorites={favorites} displayFavorites={mockFunc}/>)

  expect(wrapper).toMatchSnapshot();
});