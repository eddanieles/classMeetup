import axios from 'axios';


function makeAuthenticatedRequest(accessToken) {
  return axios.get(`https://api.meetup.com/2/open_events?category=34&zip=32801&access_token=${accessToken}`)
  .then(function(response) {
    return response;
  })

}

export default makeAuthenticatedRequest;
