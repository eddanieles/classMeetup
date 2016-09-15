import React, { Component } from 'react'
import CommentBox from './CommentBox'
import SimpleMap from './simpleMap.js'
import '../config/api.js'
import moment from 'moment'
import base from '../config/base.js'

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {attendees: []},
  this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {

  }

  render() {
    console.log(this.props.clickedMeetup);
    return (
      <div>
        <h2>{this.props.clickedMeetup.group.name}</h2>
          <p>{this.props.clickedMeetup.venue.address_1}</p>
          <p>{this.props.clickedMeetup.venue.city}</p>
          <p>{moment(this.props.clickedMeetup.time).format ('MMMM Do')}</p>
          <button type="submit"  className="btn btn-primary">RSVP</button>
        <CommentBox />
        <SimpleMap />
      </div>

    );
  }
}

export default Details;
