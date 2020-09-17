import {GET_CARDS,GET_CARD} from "./types"
import axios from 'axios';
export function GetCardsPremiuim(){
    return (dispatch)=>
     axios.get("http://localhost:4000/dogsLovers/cardpremiuim",{withCredentials:true}).then(rep=>{
        dispatch(getAllCards(rep.data))
       
        }).catch(err=>console.log(err)) 

}

export function GetCardPremiuim(id){
    return (dispatch)=>
     axios.get(`http://localhost:4000/dogsLovers/cardpremiuim/${id}`,{withCredentials:true}).then(rep=>{
        dispatch(getCard(rep.data))
       
        }).catch(err=>console.log(err)) 

}


export function AddCardPremiuim(title,subtitle,photo,time,prix,desc,idUser){
    return (dispatch)=>
     axios.post("http://localhost:4000/dogsLovers/cardpremiuim",{title,subtitle,photo,time,prix,desc,idUser},{withCredentials:true}).then(rep=>{
         if(rep.data=="ok"){
             window.location.href=`/PagecardsPremiuim/${idUser}`
        dispatch(GetCardsPremiuim(rep.data))

         }
   

       
        }).catch(err=>console.log(err)) 

}


export function UpdateCardPemiuim(id,title,subtitle,photo,time,prix,desc,idUser){
    return ()=>
    
     axios.put(`http://localhost:4000/dogsLovers/cardpremiuim/${id}`,{title,subtitle,photo,time,prix,desc,idUser},
     {withCredentials:true}).then(rep=>{
        if(rep.data=="ok"){
            window.location.href=`/PagecardsPremiuim/${idUser}`
        }
     
}).catch(err=>console.log(err)) 
}
export function deleteCard(id){
    return (dispatch)=>
     axios.delete(`http://localhost:4000/DogsLovers/cardpremiuim/${id}`).then(rep=>{
        dispatch(GetCardsPremiuim(rep.data))


        }).catch(err=>console.log(err)) 

}


export const getAllCards=(payload)=>({
type:GET_CARDS,
payload

})


export const getCard=(payload)=>({
    type:GET_CARD,
    payload
    
    })
    

