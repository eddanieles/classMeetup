import React, { Component } from 'react'
import CommentBox from './CommentBox'
import Directions from './Directions'
import SimpleMap from './simpleMap.js'

class Details extends Component {

  render() {
    console.log(this.props.clickedMeetup);
    return (
      <div>
        hello from details
        <CommentBox />
        <SimpleMap />
      </div>

    );
  }
}

export default Details;
