import React, { Component } from 'react';

class SubscriptionLink extends Component {
  render() {
    return (
        <div className="subscription-links card flex column justify-center align-center full-width">
            <div className="subscribe">
                Subscribe!
            </div>
            <a className="entry apple flex row justify-center align-center" href="https://itunes.apple.com/us/podcast/otaku-no-tabi/id1390414636?mt=2">
                <img alt="" src="https://assets.podiant.co/img/apple.svg" />
                <span>Apple Podcasts</span>
            </a>
            <a className="entry castro flex row justify-center align-center" href="https://castro.fm/itunes/1390414636">
                <img alt="" src="https://assets.podiant.co/img/castro.svg" />
                <span>Castro</span>
            </a>
            <a className="entry google flex row justify-center align-center" href="https://play.google.com/music/m/I4z4ohsxshkp4n5drgdk5sb4d3i?t=Otaku_no_Tabi">
                <img alt="" src="https://assets.podiant.co/img/google.svg" />
                <span>Google Play</span>
            </a>
            <a className="entry pocket flex row justify-center align-center" href="https://pca.st/GdX2">
                <img alt="" src="https://assets.podiant.co/img/pcast.svg" />
                <span>Pocket Casts</span>
            </a>
            <a className="entry overcast flex row justify-center align-center" href="http://feeds.podiant.co/otakunotabi/rss.xml">
                <img alt="" src="https://assets.podiant.co/img/overcast.svg" />
                <span>Overcast</span>
            </a>
            <a className="entry radio flex row justify-center align-center" href="https://play.radiopublic.com/otaku-no-tabi-WDRN2A">
                <img alt="" src="https://assets.podiant.co/img/radiopublic.svg" />
                <span>RadioPublic</span>
            </a>
            <a className="entry stitcher flex row justify-center align-center" href="https://www.stitcher.com/podcast/tory-hebert/otaku-no-tabi?refid=stpr">
                <img alt="" src="https://assets.podiant.co/img/stitcher.svg" />
                <span>Stitcher</span>
            </a>
            <a className="entry tunein flex row justify-center align-center" href="https://tunein.com/podcasts/Anime/Otaku-no-Tabi-p1127307/">
                <img alt="" src="https://assets.podiant.co/img/tunein.svg" />
                <span>TuneIn</span>
            </a>
            <a className="entry rss flex row justify-center align-center" href="http://feeds.podiant.co/otakunotabi/rss.xml">
                <img alt="" src="https://assets.podiant.co/img/rss.svg" />
                <span>RSS</span>
            </a>
        </div>
    );
  }
}

export default SubscriptionLink;