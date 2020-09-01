import React,{useState,useEffect} from 'react';
import { useDispatch} from "react-redux";
import {getLoc} from "../../actions/loc"

import "./select.css"

export default function Select() {
    const[loc,setLoc]=useState("")
const dispatch=useDispatch()
    const regions=["Tunis","Ariana","Beja","Ben Arous","Ben Guerden","Bizerte","Gabes","Gafsa","Jendouba","Kairouan","Kasserine","Kebili","Kef","mahdia","Manouba","Medenine","Monastir","Nabeul","Sfax","Sidi Bouzid","Siliana","Soussa","Tataouine","Touzeur","Zaghouane"]

      
    return (
        <div>
  <select onChange={e => dispatch(getLoc(e.target.value))}>
    <option value="region" selected disabled>--Region--</option>
    {regions.map(el=>
    <option value={el}>{el}</option>)
}
  </select>
</div>
   
    );
};

