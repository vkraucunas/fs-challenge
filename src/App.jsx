import React, { Component } from 'react';
import BottleCap from './logo.svg';
import BeerList from './components/beer_list'
import s from './index.styl';

class App extends Component {
  render() {
    return (
      <div className={s.app}>
        <div className={s.header}>
          <img src={BottleCap} className={s.logo} alt="Bottlecap logo next to name beer.status()" />
          <h2>beer.status()</h2>
        </div>
        <p className={s.intro}>
          Let's make a thing.
        </p>
        <BeerList />
      </div>
    );
  }
}

export default App;
