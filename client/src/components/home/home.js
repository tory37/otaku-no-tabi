import React, { Component } from 'react';
import Playlist from '../playlist/playlist';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="card">
          <h2>
            Welcome to Otaku no Tabi!  Tory and Ty ramble about anime, games, and throw in a little bit of Japanese here and there.
          </h2>
        </div>
        <Playlist />
      </div>
    );
  }
}

export default Home;
