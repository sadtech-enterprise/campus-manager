import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Our App.</h1>
        </header>
        <p className="App-intro">
          Background color should appear modified with Sass functions.
        </p>
      </div>
    );
  }
}

export default App;
