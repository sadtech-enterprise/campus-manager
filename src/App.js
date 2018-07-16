import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';
import Header from './components/layout/Header/Header';
import { routes } from './routes';

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="App">
        {this.props.location.pathname !== "/login" && <Header />}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
