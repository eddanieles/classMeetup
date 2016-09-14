import React, { Component } from 'react';
import moment from 'moment';

class Event extends Component {
  render() {
    let { info } = this.props;
    console.log(info);
    return (
      <li style={{display: "flex", border: "1px solid rgba(0,0,0,.3)", borderRadius: "4px", width: "60%"}}>
        <img src={info.photo_url || "http://www.fillmurray.com/200/200"}/>
        <div style={{display: "flex", flexDirection: "column", justifyContent: 'flex-start'}}>
          <h2>{moment(info.time).format('LT')}</h2>
          <h2>{moment(info.time).format('MMMM Do')}</h2>
          <h2 style={{marginLeft: "15px"}}>{info.name}</h2>
          <h2 style={{fontSize: "15px", color: "rgba(0,0,0,.4)"}}>{info.yes_rsvp_count} people going</h2>
        </div>
      </li>
    )
  }
}

export default Event;
