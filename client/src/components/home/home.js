import React, { Component } from 'react';
import Playlist from '../playlist/playlist';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="card">
          <h2>
            Welcome to Otaku no Tabi, a podcast where two friends ramble about anime, games, and whatever else happens to be on their mind. We also throw in small amounts of relevant Japanese that English only people may otherwise miss.
          </h2>
        </div>
        <Playlist />
      </div>
    );
  }
}

export default Home;
