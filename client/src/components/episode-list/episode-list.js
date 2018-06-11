import React, { Component } from 'react';

import RSSParser from 'rss-parser';
import Iframe from 'react-iframe';

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
        let entries = [];

        if (this.state.podcastJson) {
            entries = this.state.podcastJson.items.map((entry) => {
                return (<div key={ entry.title }>
                    <Iframe url={ entry.link + 'embed' }
                            width="100%"
                            height="150"
                            id={ entry.title }
                            display="initial"
                            position="relative" />
                </div>)
            });
        }

        return entries;
    }

    render() {
        return(
            <div>
                {this.createEpisodes()}
            </div>
        )
    }
}

export default EpisodeList;
