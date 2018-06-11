import React, { Component } from 'react';

import RSSParser from 'rss-parser';

// Components
import EpisodeFull from '../episode-full/episode-full';

// Model
import EpisodeModel from '../../models/episode';

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
        
        let parser = new RSSParser();
        parser.parseURL(CORS_PROXY + rssUrl, (err, feed) => {
            if (err) {
                console.log("Error: ", err);
            } else {
                this.setState({podcastJson: feed})
            }
        })
    }

    getFirstEpisode() {

    }

    createEpisodes = () => {
        var keywords = this.props.keywords;
        let episodes = [];

        if (this.state.podcastJson) {
            console.log(this.state.podcastJson.items);

            episodes = this.state.podcastJson.items.filter((rssItem) => {
                if (rssItem.title.includes(keywords)) {
                    return true;
                } 
                return false;
            }).map((rssItem) => {
                var episode = new EpisodeModel(rssItem);
            
                return (
                    <EpisodeFull episode={ episode } />
                )
            });
        }

        return episodes;
    }

    render() {
        return(
            <div className="episode-list">
                <div className="flex column justify-center align start">
                    {this.createEpisodes()}
                </div>
            </div>
        )
    }
}

export default EpisodeList;
