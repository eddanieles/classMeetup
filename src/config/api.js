import axios from 'axios';


function makeAuthenticatedRequest(accessToken) {
  axios.get("https://api.meetup.com/2/open_events?zip=32801", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Origin: 'http://localhost:3000'
    }
  })
  .then(function(response) {
    console.log(response);
  })

}

export default makeAuthenticatedRequest;
