import React, { Component } from 'react'
import Going from './Going.js'
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
          <button type="submit" className="btn btn-primary">RSVP</button>
            <div className="going">
              <h3>Attending</h3>
                <Going />
            </div>
        <CommentBox />
        <SimpleMap />
      </div>

    );
  }
}

export default Details;
