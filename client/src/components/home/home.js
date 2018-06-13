import React, { Component } from 'react';
import EpisodeList from '../episode-list/episode-list';

class SiteNav extends Component {
  render() {
    return (
        <div className="home flex row justify-center align-center full-width">
            <div className="flex column">
              <EpisodeList keywords="Otaku Shuukan" title="Otaku Shuukan" />
            </div>
        </div>
    );
  }
}

export default SiteNav;
