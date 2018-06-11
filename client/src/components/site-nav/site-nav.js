import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class SiteNav extends Component {
  render() {
    return (
      <div className="site-nav flex row justify-center align-center full-width">
          <div className="inner-wrapper flex row justify-end align-center full-width full-height">
              <div className="logo justify-self-start">
                <Link to="/">
                  Otaku no Tabi
                </Link>
              </div>

              <div className="tab">
                <Link to="/">
                  Home
                </Link>
              </div>

              <div className="tab">
                <Link to="/podcast">
                  Podcast
                </Link>
              </div>
          </div>
      </div>
    );
  }
}

export default SiteNav;
