import React, { Component } from 'react'
import CommentBox from './CommentBox'
import api from '../config/api.js'



class Details extends Component {

  render() {
    console.log(this.props.clickedMeetup);
    return (
      <div>


        <CommentBox />
      </div>

    );
  }
}

export default Details;
