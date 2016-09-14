import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-inverse">
      <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <Link to='/home' className="navbar-brand" href="#">Meetup</Link>
              <ul className="nav navbar-nav">
                  <li className="wishList">
                      <Link to="/details">previousMeetups</Link>
                  </li>
                  <li className="logout">
                      <Link to="/">Logout</Link>
                  </li>

              </ul>
          </div>

      </div>
  </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
