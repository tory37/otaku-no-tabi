import React, { Component } from 'react';
import EpisodePlayer from '../episode-player/episode-player';

class SiteNav extends Component {
  render() {
    return (
        <div className="home flex row justify-center align-center full-width">
            <EpisodePlayer />
        </div>
    );
  }
}

export default SiteNav;
