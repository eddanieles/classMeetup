import React, { Component } from 'react'
import CommentBox from './CommentBox'
import Directions from './Directions'
import moment from 'moment'
import axios from 'axios'

class Details extends Component {
  onClickRSVP(event_id, rsvp) {
      axios.post(`https://api.meetup.com/2/rsvp?event_id=${this.props.clickedMeetup.id}&rsvp=yes&access_token=${localStorage.token}`)
     .then(function(response) {
       return response;
     })
   }
  render() {
    console.log(this.props.clickedMeetup);
    return (
      <div>
        <h2>{this.props.clickedMeetup.group.name}</h2>
         <p>{this.props.clickedMeetup.venue.address_1}</p>
         <p>{this.props.clickedMeetup.venue.city}</p>
         <p>{moment(this.props.clickedMeetup.time).format ('MMMM Do')}</p>
         <button type="submit" onClick={this.onClickRSVP.bind(this)} className="btn btn-primary">RSVP</button>
        <CommentBox />
        <Directions lat={this.props.clickedMeetup.venue.lat} lon={this.props.clickedMeetup.venue.lon}/>

      </div>

    );
  }
}

export default Details;
