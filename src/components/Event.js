import React, { Component } from 'react';
import moment from 'moment';

let styles = {
  listItem: {
    display: "flex",
    border: "1px solid rgba(0,0,0,.3)",
    borderRadius: "4px",
    width: "60%"
  },
  divs: {
    display: "flex",
    flexDirection: "column"
  },
  rsvpCount: {
    fontSize: "15px",
    color: "rgba(0,0,0,.4)"
  },
  eventName: {
    marginLeft: "15px"
  }
}

const Event = props => {
  let { info, handleClick } = props;
  return (
    <li style={styles.listItem}>
      <div style={styles.divs}>
        <h2>{moment(info.time).format('LT')}</h2>
        <img src={info.photo_url || "http://www.fillmurray.com/200/200"}/>
      </div>
      <div style={styles.divs}>
        <h2>{moment(info.time).format('MMMM Do')}</h2>
        <h2 style={styles.eventName}>{info.name}</h2>
        <h2
          style={styles.rsvpCount}
          onClick={handleClick.bind(this, info)}>
          {info.yes_rsvp_count} {info.group.who} going!
        </h2>
      </div>
    </li>
  )
}

export default Event;
