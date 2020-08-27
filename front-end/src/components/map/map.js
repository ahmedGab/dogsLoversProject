 
import React, { useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from './assets/data.json';
import Markers from './VenueMarkers';

function MapView () {
const[currentLocation,setCurrentLocation]=useState({ lat: 36.827511, lng:  10.184370 })
const[zoom,setZoom]=useState(10)


    return (
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers venues={data.venues}/>
      </Map>
    );
  
}

export default MapView;