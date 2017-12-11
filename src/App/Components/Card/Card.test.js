import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('should render without crashing', () => {
  const mockFunc = jest.fn();
  const cardData = {name: 'Julie', Data:{Homeworld: 'earth'}};
  const currentType = 'card';
  const CardWrapper = shallow(<Card addToFavorites={mockFunc} info={cardData} type={currentType}/>);

  expect(CardWrapper).toBeDefined();
});

it('should match its snap shot', () => {
  const mockFunc = jest.fn();
  const cardData = {name: 'Julie', Data:{Homeworld: 'earth'}};
  const currentType = 'card';
  const CardWrapper = shallow(<Card addToFavorites={mockFunc} info={cardData} type={currentType}/>);

  expect(CardWrapper).toMatchSnapshot();
});

it('should call the add to favorites function when a card is clicked', () => {
  const mockFunc = jest.fn();
  const cardData = {name: 'Julie', Data:{Homeworld: 'earth'}};
  const currentType = 'card';
  const CardWrapper = shallow(<Card addToFavorites={mockFunc} info={cardData} type={currentType}/>);

  expect(mockFunc.mock.calls.length).toEqual(0);

  CardWrapper.simulate('click');

  expect(mockFunc.mock.calls.length).toEqual(1);
});