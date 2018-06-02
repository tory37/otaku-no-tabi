import React, { Component } from 'react';
import './site-nav.css';

class SiteNav extends Component {
  render() {
    return (
        <div className="site-nav full-width">
          <div className="flex row justify-end align-center full-width">
              <div className="site-nav-logo align-self-start">
                Otaku no Tabi
              </div>

              <div>
                Podcasts
              </div>
            </div>
        </div>
    );
  }
}

export default SiteNav;
