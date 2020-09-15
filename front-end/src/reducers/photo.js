import {GET_PHOTO} from '../actions/types'
let initState=null
let exist=localStorage.getItem("userData")

if (typeof exist !== 'undefined' && exist !== null){
    initState=JSON.parse(exist).photo
}

export const photoReducer=(state=initState,action)=>{
    if(action.type===GET_PHOTO)
    return action.payload
   
    return state
}