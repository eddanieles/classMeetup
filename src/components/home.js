import React, {Component} from 'react'
import base from '../config/base'
import makeAuthenticatedRequest from '../config/api'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    let accessToken = this.props.location.hash.split("access_token=")[1].split("&")[0];
    makeAuthenticatedRequest(accessToken).then(response => this.setState({listings: response}));
  }

  render() {
    return (
      <div>
        <h1>This is the home page</h1>
        <h2>{this.state.listings}</h2>
      </div>

    )
  }
}

export default Home;
