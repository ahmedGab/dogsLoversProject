import axios from 'axios';
import {GET_ALL_USERS,ERROR_AUTH} from "./types"

export function AddUsers(name,lastname,email,password,role,tel,lat,lon,ecole,typeDressage,photo){
    return ()=>
     axios.post("http://localhost:4000/dogsLovers/users",{name,lastname,email,password,role,tel,lat,lon,ecole,typeDressage,photo},{withCredentials:true}).then(rep=>{
        rep.data.role==="visiteur" ?
        window.location.href="/":rep.data.role==="dresseur"?window.location.href="/registerDresseur":alert("no identfier")
       
        }).catch(err=>console.log(err)) 

}
//

export function AddDresseurs(id,name,lastname,email,password,role,tel,lat,lon,ecole,typeDressage,photo){
    return (dispatch)=>
    axios.post("http://localhost:4000/dogsLovers/login",{email,password}, {withCredentials:true}).then(rep=>{
        rep.data.role==="dresseur"?
     axios.put(`http://localhost:4000/dogsLovers/users/${id}`,{name,lastname,email,password,role,tel,lat,lon,ecole,typeDressage,photo},{withCredentials:true}).then(rep=>{
         console.log(rep.data)
if(rep.data==="ok"){
window.location.href="/"
}

}): dispatch(errorAuth(rep.data))}).catch(err=>console.log(err)) 

}


//
export function Auth(email,password){
    return (dispatch)=>
    
     axios.post("http://localhost:4000/dogsLovers/login",{email,password},{withCredentials:true}).then(rep=>{

       
        rep.data.role==="visiteur" ?
        window.location.href="/":rep.data.role==="dresseur"?window.location.href="/registerDresseur":dispatch(errorAuth(rep.data))


       

        }).catch(err=>console.log(err)) 

}

//get all users from Api
export function getUsers(){
    return (dispatch)=>
    axios.get("http://localhost:4000/dogsLovers/users",{withCredentials:true}).then(rep=>{
        dispatch(getAllUsers(rep.data))

        }).catch(console.log("error"))

}

export function logout(){
    return ()=>
    axios.post("http://localhost:4000/dogsLovers/logout",{},{withCredentials:true}).then(rep=>{
        console.log(rep)

    }).catch(console.log("error"))

}


export const errorAuth=(payload)=>({
    type:ERROR_AUTH,
    payload
})

export const getAllUsers=(payload)=>({
    type:GET_ALL_USERS,
    payload
})
