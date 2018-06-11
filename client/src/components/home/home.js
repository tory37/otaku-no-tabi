import React, { Component } from 'react';
import EpisodeList from '../episode-list/episode-list';

class SiteNav extends Component {
  render() {
    return (
        <div className="home flex row justify-center align-center full-width">
            <EpisodeList />
        </div>
    );
  }
}

export default SiteNav;
