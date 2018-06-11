import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Layout Components
import SiteNav from './components/site-nav/site-nav';

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
        <div className="App">
          <SiteNav />

          <Route exact path="/" component={Home}/>
          {/* <Route path="/podcast" component={Podcast}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
