import React, { Component } from 'react'
import CommentBox from './CommentBox'
import '../config/api.js'
import moment from 'moment'
import axios from 'axios';
import Directions from './Directions'

class Details extends Component {
  constructor(){
    super();
    this.state = {
      rsvp: false
    }
  }

  onClickRSVP(event_id, rsvp) {
     axios.post(`https://api.meetup.com/2/rsvp?event_id=${this.props.clickedMeetup.id}&rsvp=yes&access_token=${localStorage.token}`)
    .then(function(response) {
      return response;
    })
    this.setState({
      rsvp: !this.state.rsvp
    })
  }


  render() {

    let buttonText = "RSVP"
    if (this.state.rsvp) {
      buttonText = "Change RSVP"
    }

    console.log(this.props.clickedMeetup);
    return (
      <div>
        <h2>{this.props.clickedMeetup.group.name}</h2>
        <p>{this.props.clickedMeetup.venue.address_1}</p>
        <p>{this.props.clickedMeetup.venue.city}</p>
        <p>{moment(this.props.clickedMeetup.time).format ('MMMM Do')}</p>
        <button type="submit" onClick={this.onClickRSVP.bind(this)} className="btn btn-success">{buttonText}</button>
        <CommentBox meetupId={this.props.clickedMeetup.id}/>
        <Directions lat={this.props.clickedMeetup.venue.lat} lon={this.props.clickedMeetup.venue.lon}/>
      </div>

    );
  }
}

export default Details;
