import React, { Component } from 'react';

class SiteNav extends Component {
  render() {
    return (
        <div className="site-nav flex row justify-center align-center full-width">
            <div className="inner-wrapper flex row justify-end align-center full-width full-height">
                <div className="logo justify-self-start">
                  Otaku no Tabi
                </div>

                <div className="tab">
                  Home
                </div>

                <div className="tab">
                  Podcasts
                </div>
            </div>
        </div>
    );
  }
}

export default SiteNav;
