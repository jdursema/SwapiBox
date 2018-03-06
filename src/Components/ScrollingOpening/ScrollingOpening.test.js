import React from 'react';
import { shallow } from 'enzyme';
import ScrollingOpening from './ScrollingOpening';

it('renders without crashing', () => {
  const openingCrawl = {title: 'Star Wars!', body: ['Yogurt', 'I hate', 'Yogurt'], releaseDate: 'Jan 1'};
  const scrollingOpening = shallow(<ScrollingOpening OpeningCrawl={openingCrawl}/>);

  expect(scrollingOpening).toBeDefined();
});

it('should match its snapshot', () => {
  const openingCrawl = {title: 'Star Wars!', body: ['Yogurt', 'I hate', 'Yogurt'], releaseDate: 'Jan 1'};
  const scrollingOpening = shallow(<ScrollingOpening OpeningCrawl={openingCrawl}/>);
  
  expect(scrollingOpening).toMatchSnapshot();
});

it('should have a default state', () => {
  const defaultState =  'scrolling-opening';
  const openingCrawl = {title: 'Star Wars!', body: ['Yogurt', 'I hate', 'Yogurt'], releaseDate: 'Jan 1'};
  const scrollingOpening = shallow(<ScrollingOpening OpeningCrawl={openingCrawl}/>);

  expect(scrollingOpening.state('display')).toEqual(defaultState);
});

it('should disapear when the exit button is clicked', () => {
  const openingCrawl = {title: 'Star Wars!', body: ['Yogurt', 'I hate', 'Yogurt'], releaseDate: 'Jan 1'};
  const scrollingOpening = shallow(<ScrollingOpening OpeningCrawl={openingCrawl}/>);
  const closeBtn = scrollingOpening.find('.close-btn');

  expect(scrollingOpening.find('.hide-screen').length).toEqual(0);

  closeBtn.simulate('click');

  expect(scrollingOpening.find('.hide-screen').length).toEqual(1);
});