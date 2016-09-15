import React, { Component } from 'react'
import CommentBox from './CommentBox'

class Details extends Component {

  render() {
    console.log(this.props.clickedMeetup);
    return (
      <div>
        hello from details
        <CommentBox />
      </div>

    );
  }
}

export default Details;
