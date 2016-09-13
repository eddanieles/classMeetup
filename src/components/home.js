import React, {Component} from 'react'
import base from '../config/base'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    }
    this.returnListings = this.returnListings.bind(this)
  }

  returnListings() {
    axios.get("https://api.meetup.com/2/open_events?zip=32801&text=tech&access_token=5fb405c39329096b4c7e4424fc555810").then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    })
  }

  render() {

    return (
      <div>
        {this.returnListings()}
      </div>

    )
  }
}

export default Home;
