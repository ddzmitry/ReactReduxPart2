import React, {Component} from 'react';



class Google_map extends Component {
    //this.refs.map 
    // direct reference to HTML element
componentDidMount () {
    new google.maps.Map(this.refs.map,{
        zoom: 12,
        center: {
            lat: this.props.lat,
            lng: this.props.lon
        }
    });
}

    render() {

        return (
            <div ref = "map" />
        )
    }
}

export default Google_map;
