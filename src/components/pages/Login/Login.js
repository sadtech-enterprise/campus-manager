import React, { Component } from 'react';

import devLogo from '../../../assets/devmountainLogo.png'
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (<div className="pageContainer loginPage">
      <section id="login">
        <img src={devLogo} />

      </section>

    </div>)
  }
}

export default Login;