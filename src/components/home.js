import React, {Component} from 'react'
import base from '../config/base'
import makeAuthenticatedRequest from '../config/api'
import fakeResponse from '../mock/data'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    //let accessToken = this.props.location.hash.split("access_token=")[1].split("&")[0];
    this.setState({listings: fakeResponse.results});
  }

  render() {
    return (
      <div>
        <h1>This is the home page</h1>
        <p>{this.props.currentUser}</p>
        <ul>{this.state.listings.map(listing => <li key={listing.id}>{listing.name}</li>)}</ul>
      </div>

    )
  }
}

export default Home;
