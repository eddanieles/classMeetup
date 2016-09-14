import React, { Component, PropTypes } from 'react'
import base from '../config/base'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      UIDs: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
     base.authWithOAuthPopup('github', this.authHandler)
     // rebase method that authenticates a user using an
     // OAuth popup. Also, takes in an Auth provider and handler

  }
  authHandler(error, userData) {
    if (!error) {
      this.props.setUser(userData.user.displayName);
      console.log(userData.user.displayName);
      console.log(userData.user.uid);
      let UIDArray = this.state.UIDs;
      this.setState({
        user: userData.user.displayName,
        UIDs: UIDArray.concat([{user: userData.user.displayName, UID: userData.user.uid}])
      })

      window.location = "http://localhost:3000/home";
      //window.location = "https://secure.meetup.com/oauth2/authorize?client_id=m9n6s9vum5tk0u5is15e0rjau0&response_type=token&redirect_uri=http://localhost:3000/home";
    } else {
      console.log("error: ",error);
    }
  }
  componentDidMount(){
    this.rebaseRef = base.syncState('UIDs', {
      context: this,
      state: 'UIDs',
      asArray: true
    })
  }
  render() {
    return (
      <div>
        <button className="loginBtn" onClick={this.handleClick}>Sign in with Github</button>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Login;
