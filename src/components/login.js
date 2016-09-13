import React, { Component } from 'react'
import base from '../config/base'


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.whatevs = this.whatevs.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
     base.authWithOAuthPopup('github', this.whatevs)

  }

  whatevs(err, user) {
      console.log("does this work");
  }

  render() {

    return (
      <button className="loginBtn" onClick={this.handleClick}>Sign in with Github</button>
    );
  }
}

export default Login;
