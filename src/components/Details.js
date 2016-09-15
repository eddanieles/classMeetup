import React, { Component } from 'react'
import CommentBox from './CommentBox'
import SimpleMap from './simpleMap.js'
import '../config/api.js'
import moment from 'moment'

class Details extends Component {



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
        <SimpleMap />
      </div>

    );
  }
}

export default Details;
