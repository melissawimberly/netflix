import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <img className="landing-logo" src="https://cdn.sproutvideo.com/7eab0df30ffe4012795c6db7e71fcddc/logos/site_logo_1509484297.png" alt="logo" />
          </h1>
        </header>
        <div className="video-outer-container">
          <div className="video-frame">
            <div className="video-container">
              <iframe
                src="https://videos.sproutvideo.com/embed/a09addb8161defcf28/5fbef75aaacf52b8?signature=PhxIM3rtvA7WWhBgB4R6ns%2F66gY%3D&amp;access_grant_id=489ddcbf101ae1c3c0&amp;downloads=&amp;expires=1510521151&amp;has_access=true&amp;login_id=789dd1b5131ff6&amp;type=hd&amp;vemail=melissa.f.wimberly@gmail.com"
                width="100%"
                height="100%"
                // frameborder="0"
                className="sproutvideo-player"
                // allowfullscreen=""
                > </iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
