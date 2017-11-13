import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Meditation from './Meditation';
import Move from  './Move';
import Breath from  './Breath';
import VideoCarousel from './VideoCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">
            <img className="landing-logo" src="https://cdn.sproutvideo.com/7eab0df30ffe4012795c6db7e71fcddc/logos/site_logo_1509484297.png" alt="logo" />
          </h1>
        </header>
        <VideoCarousel />
        <div className="category-wrapper">
          <Meditation />
          <Move />
          <Breath />
        </div>
      </div>
    );
  }
}

export default App;
