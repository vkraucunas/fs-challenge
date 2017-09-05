import React, { Component } from 'react';
import BottleCap from './logo.svg';
import BeerList from './components/beer_list'
import s from './App.css';

class App extends Component {
  render() {
    return (
      <div className={s.app}>
        <div className={s.appHeader}>
          <img src={BottleCap} className={s.logo} alt="Bottlecap logo next to name beer.status()" />
          <h2>beer.status()</h2>
        </div>
        <p className={s.appIntro}>
          Let's make a thing.
        </p>
        <BeerList />
      </div>
    );
  }
}

export default App;
