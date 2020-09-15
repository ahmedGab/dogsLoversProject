import {GET_CARDS} from "./types"
import axios from 'axios';
export function GetCardsPremiuim(){
    return (dispatch)=>
     axios.get("http://localhost:4000/dogsLovers/cardpremiuim",{withCredentials:true}).then(rep=>{
        dispatch(getAllCards(rep.data))
       
        }).catch(err=>console.log(err)) 

}


export function AddCardPremiuim(title,subtitle,photo,time,prix,desc,idUser){
    return (dispatch)=>
     axios.post("http://localhost:4000/dogsLovers/cardpremiuim",{title,subtitle,photo,time,prix,desc,idUser},{withCredentials:true}).then(rep=>{
         console.log(rep.data)
        dispatch(GetCardsPremiuim(rep.data))
   

       
        }).catch(err=>console.log(err)) 

}






export const getAllCards=(payload)=>({
type:GET_CARDS,
payload

})

