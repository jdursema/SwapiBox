import React, {Component} from 'react';
import './ScrollingOpening.css';
import PropTypes from 'prop-types';

class OpeningScrolling extends Component {
  constructor (props) {
    super();
    this.state = {
      display: 'scrolling-opening'
    };
  }

  closeScreen = () => {
    this.setState({display: 'scrolling-opening hide-screen'});
  }

  render () {
    return (
      <div className={this.state.display}>
        <button className='close-btn' onClick={ ()=>{ this.closeScreen(); } }>
          X
        </button>
        <div className='crawl'>
          <h1 className='scrolling-opening-title'>
            {this.props.OpeningCrawl.title}
          </h1>
          <div>
            {this.props.OpeningCrawl.body &&
            <div>
              <p>{this.props.OpeningCrawl.body[0]}</p>
              <p>{this.props.OpeningCrawl.body[1]}</p>
              <p>{this.props.OpeningCrawl.body[2]}</p>
            </div>}
            <p>{this.props.OpeningCrawl.releaseDate}</p>
          </div>
        </div> 
      </div>
    );
  } 
}

export default OpeningScrolling;

OpeningScrolling.propTypes = {
  OpeningCrawl: PropTypes.object
};