import axios from 'axios';

function requestAuthorization() {
  axios.get("https://secure.meetup.com/oauth2/authorize?client_id=m9n6s9vum5tk0u5is15e0rjau0&response_type=token&redirect_uri=https://lakeblack.github.io")
  .then(function(response) {
    console.log(response);
  })
}

function makeAuthenticatedRequest(accessToken) {
  axios.get("https://api.meetup.com/2/member/self/?access_token={accessToken}")
  .then(function(response) {
    console.log(response);
  })

}

export { requestAuthorization, makeAuthenticatedRequest };
