import axios from 'axios';


function getAllTechMeetups(accessToken) {
  return axios.get(`https://api.meetup.com/2/open_events?category=34&zip=32801&access_token=${accessToken}`)
  .then(response => response.data.results)
}

function getUpcomingMeetups(accessToken) {
  return axios.get(`https://api.meetup.com/2/events?member_id=self&rsvp=yes&status=upcoming&access_token=${accessToken}`)
  .then(response => response.data.results)
}

function getPastMeetups(accessToken) {
  return axios.get(`https://api.meetup.com/self/events?fields=status=past&member_id=self&access_token=${accessToken}`)
  .then(response => response.data.filter(meetup => meetup.status === 'past'))
}

export { getAllTechMeetups, getUpcomingMeetups, getPastMeetups };
