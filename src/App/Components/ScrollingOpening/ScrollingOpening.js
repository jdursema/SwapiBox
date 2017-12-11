import React from 'react';
import './ScrollingOpening.css';
import PropTypes from 'prop-types';

const OpeningScrolling = ({ OpeningCrawl }) => {
  return (
    <div className='scrolling-opening'>
      <div className='crawl'>
        <div className='fade'></div>
        <h1 className='scrolling-opening-title'>{OpeningCrawl.title}</h1>
        <div>
          {OpeningCrawl.body &&
          <div>
            <p>{OpeningCrawl.body[0]}</p>
            <p>{OpeningCrawl.body[1]}</p>
            <p>{OpeningCrawl.body[2]}</p>
          </div>}

        </div>
      </div>
    </div>
  );
};

export default OpeningScrolling;

OpeningScrolling.propTypes = {
  OpeningCrawl: PropTypes.object
};