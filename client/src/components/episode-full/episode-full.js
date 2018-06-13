import React, { Component } from 'react';

import Iframe from 'react-iframe';

class EpisodeFull extends Component {
  render() {
    let episode = this.props.episode;

    return (<div key={ episode.title } className="episode-full">
      <div className="flex column justify-start align-start">

        <div className="embedded">
            <Iframe url={ episode.embeddedLink }
                    width="100%"
                    height="150"
                    id={ episode.title }
                    display="initial"
                    position="relative" />
        </div>

        <div className="description" >  
          { episode.content }
        </div>

      </div>

    </div>);
  }
}

export default EpisodeFull;
