import React, { Component } from 'react';
import EpisodeList from '../episode-list/episode-list';

class Playlist extends Component {

  componentDidMount() {
    this.onRouteChanged();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    if (this.props.match && this.props.match.params) {
      if ( this.props.match.params.keyword) {
        this.setState({keyword: this.props.match.params.keyword});
      } else  if (this.props.match.params.episode) {
        this.setState({
          episode: this.props.match.params.episode,
          keyword: ""
        });
      }
    } else {
      this.setState({keyword: ""});
    }
  }

  mapKeywordToTitle() {
    switch (this.state.keyword) {
      case null:
      case "":
        if (this.state.episode) {
          return "Episode";
        } else {
          return "All Episodes";
        }
      case "shuukan:":
        return "Otaku Shuukan";
      case "movie:": 
        return "Movies";
      case "game:":
        return "Games";
      case "seasonal:":
        return "Seasonal Anime";
      case "series:":
        return "Series";
      default:
        return null;
    }
  }

  render() {
    if (this.state) {
      return (
          <div className="home flex row justify-center align-center full-width">
              <div className="flex column full-width">
                <EpisodeList keywords={this.state.keyword} episode={this.state.episode} title={this.mapKeywordToTitle()} />
              </div>
          </div>
      );
    } else {
      return (
        <div className="home flex row justify-center align-center full-width">
            <div className="flex column">
              Error fetching episodes
            </div>
        </div>
    );
    }
  }
}

export default Playlist;
