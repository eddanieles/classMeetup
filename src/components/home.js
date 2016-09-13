import React, { Component } from 'react'
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
  axios.get("https://api.meetup.com/2/events?key=ABDE12456AB2324445&group_urlname=ny-tech&sign=true")
  .then(function(response){
    console.log(response);
  })
  .catch(function (error) {
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
