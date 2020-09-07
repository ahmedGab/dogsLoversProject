import {GET_COVER} from '../actions/types'
let initState=null
let exist=localStorage.getItem("userData")

if (typeof exist !== 'undefined' && exist !== null){
    initState=JSON.parse(exist).coverimg
}
export const coverPhotoReducer=(state=initState,action)=>{
  
    if(action.type===GET_COVER)
    return action.payload
    return state
}