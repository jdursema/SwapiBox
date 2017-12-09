import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () =>{   
  it('should be defined', () => {
    const renderedApp = shallow(<App />, {disableLifecycleMethods: true});  
    expect(renderedApp).toBeDefined();
  });
});

