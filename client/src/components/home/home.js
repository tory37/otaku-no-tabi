import React, { Component } from 'react';
import EpisodeList from '../episode-list/episode-list';

class SiteNav extends Component {
  render() {
    return (
        <div className="home flex row justify-center align-center full-width">
            <div className="flex column">
              <div>Otaku Shuukan</div>
              <EpisodeList keywords="Otaku Shuukan" />
              <div>Darling in the FRANXX</div>
              <EpisodeList keywords="Darling " />
              <div>Movies</div>
              <EpisodeList keywords="Movie" />
            </div>
        </div>
    );
  }
}

export default SiteNav;
