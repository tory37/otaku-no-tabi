import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Layout Components
import SiteNav from './components/site-nav/site-nav';
import SubscriptionLinks from './components/subscription-links/subscription-links';
import FollowLinks from './components/follow-links/follow-links';

// Route Components
import Home from './components/home/home';
import Playlist from "./components/playlist/playlist";
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

          <div className="body flex row justify-center align-start">
            <div className="body-inner flex row justify-end align-start">
              <div className="route-container full-width"> 
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/playlist/:keyword" component={Playlist} />
                  <Route exact path="/episode/:episode" component={Playlist} />
                  <Route component={NotFound} />
                </Switch>
              </div>
              <div className="sidebar-container flex column justify-start align-center">
                <SubscriptionLinks />
                <FollowLinks />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
