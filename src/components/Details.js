import React, { Component } from 'react'
import CommentBox from './CommentBox'
import Directions from './Directions'
import SimpleMap from './simpleMap.js'
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
        <CommentBox />
        <SimpleMap />
      </div>

    );
  }
}

export default Details;
