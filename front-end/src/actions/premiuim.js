import {GET_PREM,ADD_PREM} from "./types"
import axios from 'axios';



export function GetCountsPremiuim(){
    return (dispatch)=>
     axios.get("http://localhost:4000/dogsLovers/premiuim",{withCredentials:true}).then(rep=>{
        dispatch(getAllCountsPremiuim(rep.data))
       
        }).catch(err=>console.log(err)) 

}


export function AddComptePremiuim(idUser,date,name,lastname,email,tel,password,role,state){
    return (dispatch)=>
    axios.post("http://localhost:4000/dogsLovers/login",{email,password}, {withCredentials:true}).then(rep=>{
        rep.data.role=="dresseur" ?
     axios.post("http://localhost:4000/dogsLovers/premiuim",{idUser,date,name,lastname,email,tel,password,role,state},{withCredentials:true}).then(rep=>{
         console.log(rep.data)
        dispatch(GetCountsPremiuim(rep.data))

       dispatch(ADDCountPremiuim(rep.data))

    })

       : rep.data.role=="premiuim"? alert("Vous étes abonné"):alert("problem") }).catch(err=>console.log(err)) 

}
export function UpdateCountPemiuim(id,idUser,date,name,lastname,email,tel,password,role,state){
    return (dispatch)=>
    
     axios.put(`http://localhost:4000/dogsLovers/premiuim/${id}`,{role,state},{withCredentials:true}).then(rep=>{
         if(rep.data.role=="premiuim"){
            axios.put(`http://localhost:4000/dogsLovers/users/${idUser}`,{role:rep.data.role},{withCredentials:true}).then(rep=>{
                localStorage.setItem("userData",JSON.stringify(rep.data))

          })}



              dispatch(GetCountsPremiuim(rep.data))

}).catch(err=>console.log(err)) 

}

export function deleteCount(id){
    return (dispatch)=>
     axios.delete(`http://localhost:4000/DogsLovers/premiuim/${id}`).then(rep=>{
        dispatch(GetCountsPremiuim(rep.data))


        }).catch(err=>console.log(err)) 

}

export const getAllCountsPremiuim=(payload)=>({
    type:GET_PREM,
    payload

})


export const ADDCountPremiuim=(payload)=>({
    type:ADD_PREM,
    payload

})


