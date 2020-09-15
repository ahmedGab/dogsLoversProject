import React, { Component } from "react";
import Leaflet from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const initialState = {
  zoom: 11,
  updated: false
};


export default class MapDisplay extends Component {
  
  render() {
    
      const position = [this.props.lat,this.props.lon];
      return (
        <>
        {this.props.lat && this.props.lon?

        <Map
          center={position}
          zoom={initialState.zoom}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
       
          <Popup>
    </Popup>
    </Marker>
        </Map>:<p>attendez</p> }</>
      );
    }   
}