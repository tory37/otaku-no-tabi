import React, { Component } from 'react';

// Components
import EpisodeFull from '../episode-full/episode-full';

// Model
import EpisodeModel from '../../models/episode';

import RSSParser from 'rss-to-json';

class EpisodeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rss: {}
        };
    }

    componentDidMount() {
        const rssUrl = "http://feeds.podiant.co/otakunotabi/rss.xml";

        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

        this.setState({isLoading: true});
        
        //let parser = new RSSParser();
        RSSParser.load(CORS_PROXY + rssUrl, (err, feed) => {
            if (err) {
                console.log("Error: ", err);
                this.setState({
                    isLoading: false
                })
            } else {
                this.setState({
                    podcastJson: feed,
                    isLoading: false
                });
            }
        })
    }

    getFirstEpisode() {

    }

    createEpisodes = () => {
        let keywords = this.props.keywords;
        let episode = this.props.episode;
        var title = this.props.title;
        let episodes = [];

        if (this.state.podcastJson) {
            console.log(this.state.podcastJson.items);

            var unmapped;

            if (!keywords || keywords === "") {
                if (!episode || episode === "") {
                    unmapped = this.state.podcastJson.items.filter((rssItem) => {
                       return true; 
                    });
                } else {
                    unmapped = this.state.podcastJson.items.filter((rssItem) => {
                        if (rssItem.itunes_episode === episode) {
                            return true;
                        } 
                        return false;
                    });
                }
            } else {
                unmapped = this.state.podcastJson.items.filter((rssItem) => {
                    if (rssItem.title.toLowerCase().indexOf(keywords.toLowerCase()) !== -1) {
                        return true;
                    } 
                    return false;
                })
            }
            
            episodes = unmapped.map((rssItem) => {
                var episode = new EpisodeModel(rssItem);
            
                return (
                    <EpisodeFull episode={ episode } />
                )
            });
        }

        console.log(episodes);

        return episodes;
    }

    render() {
        var episodes = this.createEpisodes();
        if (this.state.isLoading) {
            return(
                <div className="episode-list card">
                    Loading...
                </div>
            )
        }
        else if (episodes.length > 0) {
            return(
                <div className="episode-list card">
                    <div className="header">
                        {this.props.title}
                    </div>
                    <div className="flex column justify-center align start">
                        {this.createEpisodes()}
                    </div>
                </div>
            )
        } else {
            return(
                <div className="episode-list card">
                    <div className="header">
                        This episode or playlist does not exist
                    </div>
                </div>
            )
        }
    }
}

export default EpisodeList;
