import React from 'react';
import { shallow } from 'enzyme';
import ScrollingOpening from './ScrollingOpening';

it('renders without crashing', () => {
  const openingCrawl = {title: 'Star Wars!', body: ['Yogurt', 'I hate', 'Yogurt'], releaseDate: 'Jan 1'};
  const scrollingOpening = shallow(<ScrollingOpening OpeningCrawl={openingCrawl}/>);

  expect(scrollingOpening).toBeDefined();
})

it('should match its snapshot', () => {
  const openingCrawl = {title: 'Star Wars!', body: ['Yogurt', 'I hate', 'Yogurt'], releaseDate: 'Jan 1'};
  const scrollingOpening = shallow(<ScrollingOpening OpeningCrawl={openingCrawl}/>);
  
  expect(scrollingOpening).toMatchSnapshot();
});