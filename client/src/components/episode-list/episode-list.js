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
        
        //let parser = new RSSParser();
        RSSParser.load(CORS_PROXY + rssUrl, (err, feed) => {
            if (err) {
                console.log("Error: ", err);
            } else {
                this.setState({podcastJson: feed});
            }
        })
    }

    getFirstEpisode() {

    }

    createEpisodes = () => {
        var keywords = this.props.keywords;
        var title = this.props.title;
        let episodes = [];

        if (this.state.podcastJson) {
            console.log(this.state.podcastJson.items);

            episodes = this.state.podcastJson.items.filter((rssItem) => {
                if (rssItem.title.toLowerCase().indexOf(keywords.toLowerCase()) !== -1) {
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

        console.log(episodes);

        return episodes;
    }

    render() {
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
    }
}

export default EpisodeList;
