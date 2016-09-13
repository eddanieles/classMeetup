import React, { Component } from 'react'
import base from '../config/base'

class Login extends Component {
 constructor(props) {
   super(props);
   this.handleClick = this.handleClick.bind(this);
   this.authHandler = this.authHandler.bind(this);
 }
 handleClick(event) {
   event.preventDefault();
    base.authWithOAuthPopup('github', this.authHandler)
    // rebase method that authenticates a user using an
    // OAuth popup. Also, takes in an Auth provider and handler

 }

 authHandler(err, user) {
     console.log("does this work");

     this.props.history.replaceState(null, "/home")
     // history is an object of the DOM. replaceState is a function
     // that modifies the current history instead of creating a new one
 }

 render() {
   console.log(this.props)

   return (
     <button className="loginBtn" onClick={this.handleClick}>Sign in with Github</button>
   );
 }
}

export default Login;
