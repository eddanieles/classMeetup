import React, {Component} from 'react'


class Directions extends Component {
  constructor(props){
    super(props)
    this.state ={
      lat: "",
      lon: ""
    }
  }


  render(){
    const self = this;

  navigator.geolocation.getCurrentPosition(function(position) {
    self.setState({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    })
 console.log(position.coords.latitude, position.coords.longitude);
});


    return(
      <div id="map">
      {this.state.lat},{this.state.lon}
      </div>
    )
  }

}
export default Directions
