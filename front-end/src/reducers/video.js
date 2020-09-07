import {GET_VIDEO} from '../actions/types'

let initState=null
let exist=localStorage.getItem("userData")

if (typeof exist !== 'undefined' && exist !== null){
    initState=JSON.parse(exist).video
}
export const videoReducer=(state=initState,action)=>{
    if(action.type===GET_VIDEO)
    return action.payload
    return state
}