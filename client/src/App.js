import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SiteNav from './site-nav/site-nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteNav/>
      </div>
    );
  }
}

export default App;
