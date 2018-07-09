import React, { Component } from 'react';
import './App.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Our App.</h1>
        </header>
        <p className="App-intro">
          Background color should be modified with Sass functions.
        </p>
      </div>
    );
  }
}

export default App;
