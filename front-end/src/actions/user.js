import axios from 'axios';
import {GET_ALL_USERS,ERROR_AUTH,GET_USER,DELETE_USER} from "./types"

export function AddUsers(name,lastname,email,password,role,tel,lat,lon,ecole,region,fb,youtube,video,desc,photo,lundi,lundipm,mardi,mardipm,mercredi,mercredipm,jeudi,jeudipm,vendredi,vendredipm,samedi,samedipm,dimanche,dimanchepm){
    return ()=>
     axios.post("http://localhost:4000/dogsLovers/users",{name,lastname,email,password,role,tel,lat,lon,ecole,region,fb,youtube,video,desc,photo,lundi,lundipm,mardi,mardipm,mercredi,mercredipm,jeudi,jeudipm,vendredi,vendredipm,samedi,samedipm,dimanche,dimanchepm},{withCredentials:true}).then(rep=>{
        rep.data.role==="visiteur" ?
        window.location.href="/":rep.data.role==="dresseur"?window.location.href="/registerDresseur":alert("no identfier")
       
        }).catch(err=>console.log(err)) 

}
//

export function AddDresseurs(id,name,lastname,email,password,role,tel,lat,lon,ecole,region,fb,youtube,video,desc,photo,coverimg,lundi,lundipm,mardi,mardipm,mercredi,mercredipm,jeudi,jeudipm,vendredi,vendredipm,samedi,samedipm,dimanche,dimanchepm){
    return (dispatch)=>
    axios.post("http://localhost:4000/dogsLovers/login",{email,password}, {withCredentials:true}).then(rep=>{
        rep.data.role==="dresseur" ||  rep.data.role==="premiuim" ?
     axios.put(`http://localhost:4000/dogsLovers/users/${id}`,{name,lastname,email,password,role,tel,lat,lon,ecole,region,fb,youtube,video,desc,photo,coverimg,lundi,lundipm,mardi,mardipm,mercredi,mercredipm,jeudi,jeudipm,vendredi,vendredipm,samedi,samedipm,dimanche,dimanchepm},{withCredentials:true}).then(rep=>{

if(rep.data!=="error"){
     

    localStorage.setItem("userData",JSON.stringify(rep.data))

window.location.href=`/detailDresseur/${rep.data._id}`
}
}): dispatch(errorAuth(rep.data))}).catch(err=>console.log(err)) 

}

//
export function deleteUser(id){
    return (dispatch)=>
     axios.delete(`http://localhost:4000/DogsLovers/users/${id}`).then(rep=>{
        dispatch(getUsers(rep.data))


        }).catch(err=>console.log(err)) 

}
//
export function Auth(email,password){
    return (dispatch)=>
    
     axios.post("http://localhost:4000/dogsLovers/login",{email,password},{withCredentials:true}).then(rep=>{
       
        rep.data.role!="error" ?
        window.location.href="/":dispatch(errorAuth(rep.data)) 


       

        }).catch(err=>console.log(err)) 

}

//get all users from Api
export function getUsers(){
    return (dispatch)=>
    axios.get("http://localhost:4000/dogsLovers/users",{withCredentials:true}).then(rep=>{
        dispatch(getAllUsers(rep.data))

        }).catch(console.log("error"))

}

export function getUser(id){
    return (dispatch)=>
    axios.get("http://localhost:4000/dogsLovers/users/"+id,{withCredentials:true}).then(rep=>{
        dispatch(getOneUser(rep.data))

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
export const getOneUser=(payload)=>({
    type:GET_USER,
    payload
})

export const DeleteOneUser=(payload)=>({
    type:DELETE_USER,
    payload
})