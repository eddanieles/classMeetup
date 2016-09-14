import React, { Component } from 'react';
import makeAuthenticatedRequest from '../config/api';

class App extends Component {
  render() {
    let accessToken = this.props.location.hash.split("access_token=")[1].split("&")[0];
    makeAuthenticatedRequest(accessToken);
    return (
      <div>
        <h1>Dog</h1>
      </div>
    );
  }
}

export default App;
