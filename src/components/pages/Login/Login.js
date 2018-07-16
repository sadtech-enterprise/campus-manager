import React, { Component } from "react";
import axios from "axios";
import devLogo from "../../../assets/devmountainLogo.png";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleAuth(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitAuth = () => {
    axios.post("/api/auth", {
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    console.log("AUTH", this.state);
    return (
      <div className="pageContainer loginPage">
        <section id="login">
          <form>
            <img src={devLogo} />
            <div>
              Username:
              <input
                name="username"
                // value={this.state.username}
                onChange={this.handleAuth}
              />
            </div>
            <div>
              Password:
              <input name="password" onChange={this.handleAuth} />
            </div>
            <button onSubmit={() => this.submitAuth()}>Submit</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Login;
