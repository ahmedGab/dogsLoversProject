import React, { Component } from "react";
import Leaflet from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { connect } from "react-redux";
import {getLat} from "../../actions/latlngMap"
import {getLng} from "../../actions/latlngMap"

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});


const MyMarker = props => {

    const initMarker = ref => {
      if (ref) {
        ref.leafletElement.openPopup()
      }
    }
  
    return <Marker  ref={initMarker} {...props} />
  }
  
  class MapExample extends Component {
  
      state = {
        currentPos: null,
      
      };
    
     
      
  
    handleClick=(e)=>{
        this.setState({lat:e.latlng.lat})
        this.props.Lat(e.latlng.lat)
        this.props.Lng(e.latlng.lng)

                this.setState({ currentPos: e.latlng })
    }
    
    render() {
      return (
        <div>
          <Map center={this.props.center} zoom={this.props.zoom} onClick={this.handleClick}>
            <TileLayer
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            { this.state.currentPos && <MyMarker position={this.state.currentPos} >
              <Popup position={this.state.currentPos}>
                Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
              </Popup>
            </MyMarker>}
          </Map>
        </div>
      )
    }
  }
  const mapDispatchToProps=(dispatch)=>({
    Lat:(lat)=>dispatch(getLat(lat)),
    Lng:(lng)=>dispatch(getLng(lng))

    })
  
  export default connect (null,mapDispatchToProps)(MapExample);