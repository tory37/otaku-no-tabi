import React, { Component } from 'react';

class SubscriptionLink extends Component {
  render() {
    return (
        <div className="follow-links card flex column justify-center align-center full-width">
            <div className="follow">
                Join Us!
            </div>
            <a className="entry discord flex row justify-center align-center" href="https://discord.gg/Sjzyms9">
                <i className="fab fa-discord" />
                <span>Discord</span>
            </a>
            <a className="entry facebook flex row justify-center align-center" href="https://m.facebook.com/otakunotabi">
                <i className="fab fa-facebook" />
                <span>Facebook</span>
            </a>
            <a className="entry twitter flex row justify-center align-center" href="https://twitter.com/otaku_tabihttps://www.reddit.com/r/otakunotabi/">
                <i className="fab fa-twitter" />
                <span>Twitter</span>
            </a>
            <a className="entry reddit flex row justify-center align-center" href="https://www.reddit.com/r/otakunotabi/">
                <i className="fab fa-reddit" />
                <span>Reddit</span>
            </a>
            <a className="entry youtube flex row justify-center align-center" href="https://www.youtube.com/channel/UCGkhUmR-jDDzDXBlEhEfjdw">
                <i className="fab fa-youtube" />
                <span>Youtube</span>
            </a>
        </div>
    );
  }
}

export default SubscriptionLink;