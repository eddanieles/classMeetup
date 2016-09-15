import React, {Component} from 'react'
import CommentBox from './CommentBox'
import Directions from './Directions'
import SimpleMap from './SimpleMap.js'
import {initMap, calculateAndDisplayRoute} from '../lib/MapStuff'

class Details extends Component {
    componentDidMount() {
        initMap(this.refs.map, this.refs.rightPanel, this.refs.floatingPanel, this.refs.begin, this.refs.end)
        calculateAndDisplayRoute(this.refs.begin, this.refs.end);
    }
    render() {
        console.log(this.props.clickedMeetup);
        return (
            <div>
                <CommentBox/>
                <div ref="floatingPanel" style={{
                    position: "absolute",
                    top: "10px",
                    left: "25%",
                    zIndex: "5",
                    backgroundColor: "#fff",
                    padding: "5px",
                    border: "1 px solid #999",
                    textAlign: "center",
                    fontFamily: 'Roboto',
                    lineHeight: "30px",
                    paddingLeft: "10px",
                    background: "#fff",
                    padding: "5px",
                    fontSize: "14px",
                    fontFamily: "Arial",
                    border: "1 px solid #ccc",
                    boxShadow:" 0 2px 2px rgba(33, 33, 33, 0.4)",
                    display: "none"
                }}>
                    <strong>Start:</strong>
                    <input type="text" ref="begin" style={{}}/>
                    <br/>
                    <strong>End:</strong>
                    <input type="text" ref="end" style={{}}/>
                </div>
                <div ref="rightPanel" style={{
                    fontFamily: 'Roboto',
                    lineHeight: "30px",
                    paddingLeft: "10px",
                    height: "100%",
                    float: "right",
                    width: "390px",
                    overflow: "auto",
                }}></div>
                <div ref="map" style={{
                    width: "500px",
                    height: "500px"
                }}></div>
            </div>

        );
    }
}

export default Details;
