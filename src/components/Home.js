import React, {Component} from 'react'
import Event from './Event'
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
    makeAuthenticatedRequest(accessToken)
    .then(response => this.setState({listings: response.data.results}))
  }

  render() {
    let eventListings = this.state.listings.map(listing => (
      <Event
        key={listing.id}
        info={listing}
        handleClick={this.props.handleClick}/>));
    return (
      <div>
        <h1>This is the home page</h1>
        <ul style={{listStyleType: "none"}}>{eventListings}</ul>
      </div>

    )
  }
}

export default Home;
