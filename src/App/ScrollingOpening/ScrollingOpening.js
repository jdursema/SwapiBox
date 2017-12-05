import React from 'react';
import './ScrollingOpening.css';

const OpeningScrolling = ({OpeningCrawl}) => {
  return(
    <div className='scrolling-opening'>
      <div className='crawl'>
      <div className='fade'></div>
      <h1 className='scrolling-opening-title'>{OpeningCrawl.title}</h1>
       <p className='scrolling-opening-text'>{OpeningCrawl.body}</p>
      </div>
    </div>
  )
}

export default OpeningScrolling;