import React, { Component } from 'react';
import BottleCap from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={BottleCap} className="logo" alt="Bottlecap logo next to name beer.status()" />
          <h2>beer.status()</h2>
        </div>
        <p className="app-intro">
          Let's make a thing.
        </p>
      </div>
    );
  }
}

export default App;
