import React from 'react';
import { shallow } from 'enzyme';
import MainSection from './MainSection';


it('should render without crashing', () => {
  const mainSectionWrapper = shallow(<MainSection />);

  expect(mainSectionWrapper).toBeDefined();
});

it('should match the snapshot', () => {
  const mockFunc = jest.fn();
  const mockFunc2 = jest.fn();
  const mockFunc3 = jest.fn();
  const mockFunc4 = jest.fn();
  const cardData = 
    [{name: 'Julie', Data:{Homeworld: 'earth'}},
      {name: 'Pluto', Data:{Residents: 'Goofy'}}];

  const mainSectionWrapper = shallow(<MainSection 
    fetchCharacterCardInfo={mockFunc} 
    fetchVehicleCardInfo={mockFunc2} 
    fetchPlanetCardInfo={mockFunc3} 
    cardsInfo={cardData} 
    addToFavorites={mockFunc4} />);

  expect(mainSectionWrapper).toMatchSnapshot();
});
