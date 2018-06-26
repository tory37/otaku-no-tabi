import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import enhanceWithClickOutside from 'react-click-outside';

class SiteNav extends Component {
  constructor() {
    super();
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      showDrawer: false
    });
  }

  toggleDrawer() {
    this.setState({
      showDrawer: !this.state.showDrawer
    });
  }

  closeDrawer() {
    this.setState({
      showDrawer: false
    });
  }

  handleClickOutside() {
    this.closeDrawer();
  }

  render() {
    return (
      <div className="site-nav flex row justify-center align-center full-width">
          <div className="inner-wrapper flex row justify-end align-center full-width full-height">
              <div className="logo justify-self-start">
                <Link to="/" onClick={this.closeDrawer}>
                  Otaku no Tabi
                </Link>
              </div>
        
              <div className="desktop-wrapper flex row justify-end align-center full-width full-height">
                <div className="tab">
                  <Link to="/">
                    Home
                  </Link>
                </div>
                |
                <div className="tab">
                  <Link to="/playlist/shuukan:">
                    Otaku Shuukan
                  </Link>
                </div>
                |
                <div className="tab">
                  <Link to="/playlist/seasonal:">
                    Seasonal Anime
                  </Link>
                </div>
                |
                <div className="tab">
                  <Link to="/playlist/movie:">
                    Movies
                  </Link>
                </div>
                |
                <div className="tab">
                  <Link to="/playlist/game:">
                    Games
                  </Link>
                </div>
                |
                <div className="tab">
                  <Link to="/playlist/series">
                    Old Series
                  </Link>
                </div> 
              </div>

              <div className="mobile-wrapper">
                <div className="drawer-button" onClick={this.toggleDrawer}>
                  <i class="fas fa-bars"></i>
                </div>
                {this.state && this.state.showDrawer ? 
                  <div className="drawer-items card">
                    <div className="tab">
                      <Link to="/" onClick={this.closeDrawer}>
                        Home
                      </Link>
                    </div>
                    <div className="tab">
                      <Link to="/playlist/shuukan:" onClick={this.closeDrawer}>
                        Otaku Shuukan
                      </Link>
                    </div>
                    <div className="tab">
                      <Link to="/playlist/seasonal:" onClick={this.closeDrawer}>
                        Seasonal Anime
                      </Link>
                    </div>
                    <div className="tab">
                      <Link to="/playlist/movie:" onClick={this.closeDrawer}>
                        Movies
                      </Link>
                    </div>
                    <div className="tab">
                      <Link to="/playlist/game:" onClick={this.closeDrawer}>
                        Games
                      </Link>
                    </div>
                    <div className="tab">
                      <Link to="/playlist/series" onClick={this.closeDrawer}>
                        Old Series
                      </Link>
                    </div> 
                </div> : null }
              </div>
          </div>
      </div>
    );
  }
}

export default enhanceWithClickOutside(SiteNav);
