import React,{useState,useEffect} from 'react';
import { useDispatch} from "react-redux";
import {getLoc} from "../../actions/loc"
import axios from "axios"
import "./select.css"

export default function Select() {
    const[data,setData]=useState("")
const dispatch=useDispatch()

async function  getData(){
    const result =  await axios.get("http://localhost:4000/dogsLovers/users/profil",{withCredentials:true})

    setData(result.data);
}

useEffect( () => {

getData()

},[]);
    const regions=["Tunis","Ariana","Beja","Ben Arous","Ben Guerden","Bizerte","Gabes","Gafsa","Jendouba","Kairouan","Kasserine","Kebili","Kef","mahdia","Manouba","Medenine","Monastir","Nabeul","Sfax","Sidi Bouzid","Siliana","Soussa","Tataouine","Touzeur","Zaghouane"]

           return (
        <div className="wrap">
  <select defaultValue={data.region}  onChange={e => dispatch(getLoc(e.target.value))}>
   <option defaultValue={data.region} value="">--choisissez votre gouvernorat--</option>)

    {regions.map(el=>
   <option defaultValue={data.region} value={el}>{el}</option>)
}
  </select>
</div>
   
    );
};

