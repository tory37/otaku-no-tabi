import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Layout Components
import SiteNav from './components/site-nav/site-nav';
import SubscriptionLinks from './components/subscription-links/subscription-links';

// Route Components
import Home from './components/home/home';
import NotFound from './components/not-found/not-found';

const PAGES = {
  '/': Home
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <SiteNav />

          <div className="flex row justify-space-between align-start">
            <div className="route-container"> 
              <Route exact path="/" component={Home}/>
            </div>
            <div className="sidebar-container">
              <SubscriptionLinks />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
