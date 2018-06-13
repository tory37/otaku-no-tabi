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
    if (this.props.match && this.props.match.params && this.props.match.params.keyword) {
      this.setState({keyword: this.props.match.params.keyword});
    } else {
      this.setState({keyword: ""});
    }
  }

  mapKeywordToTitle() {
    switch (this.state.keyword) {
      case null:
      case "":
        return "Latest Episode";
      case "shuukan":
        return "Otaku Shuukan";
      case "movie": 
        return "Movie";
      case "games":
        return "Games";
      case "seasonal":
        return "Seasonal";
      case "series":
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
                <EpisodeList keywords={this.state.keyword} title={this.mapKeywordToTitle()} />
              </div>
          </div>
      );
    } else {
      return (
        <div className="home flex row justify-center align-center full-width">
            <div className="flex column">
              This playlist is empty or does not exist
            </div>
        </div>
    );
    }
  }
}

export default Playlist;
