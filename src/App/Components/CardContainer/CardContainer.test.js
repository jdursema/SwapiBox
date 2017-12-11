import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

it('renders without crashing', () => {
  const mockfunc = jest.fn()
  const cardData = 
    [{name: 'Julie', Data:{Homeworld: 'earth'}}, 
      {name: 'Pluto', Data:{Residents: 'Goofy'}}];
  const favoritesData = 
    [{name: 'Jojo', Data:{ homeworld: 'Saturn'}}];
  const CardContainerWrapper = shallow(<CardContainer Favorites={favoritesData} addToFavorites={mockfunc} cardsInfo={cardData} />);

  expect(CardContainerWrapper).toBeDefined();
});

it('matches its snapshot', () => {
  const mockfunc = jest.fn()
  const cardData = 
    [{name: 'Julie', Data:{Homeworld: 'earth'}}, 
      {name: 'Pluto', Data:{Residents: 'Goofy'}}];
  const favoritesData = 
    [{name: 'Jojo', Data:{ homeworld: 'Saturn'}}];
  const CardContainerWrapper = shallow(<CardContainer Favorites={favoritesData} addToFavorites={mockfunc} cardsInfo={cardData} />);

  expect(CardContainerWrapper).toMatchSnapshot();
});
