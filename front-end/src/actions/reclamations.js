import {REP_REC,GET_RECS} from "./types"
import axios from 'axios';
export function GetReclamations(){
    return (dispatch)=>
     axios.get("http://localhost:4000/dogsLovers/reclamations",{withCredentials:true}).then(rep=>{
        dispatch(getAllRecs(rep.data))
       
        }).catch(err=>console.log(err)) 

}



export function AddReclamation(date,name,lastname,email,subject,message){
    return (dispatch)=>
     axios.post("http://localhost:4000/dogsLovers/reclamations",{date,name,lastname,email,subject,message},{withCredentials:true}).then(rep=>{
        dispatch(reponseReclamation(rep.data))
        dispatch(getAllRecs(rep.data))

       
        }).catch(err=>console.log(err)) 

}

export function deleteRec(id){
    return (dispatch)=>
     axios.delete(`http://localhost:4000/DogsLovers/reclamations/${id}`).then(rep=>{
        dispatch(GetReclamations(rep.data))


        }).catch(err=>console.log(err)) 

}




export const getAllRecs=(payload)=>({
type:GET_RECS,
payload

})

export const reponseReclamation=(payload)=>({
    type:REP_REC,
    payload

})