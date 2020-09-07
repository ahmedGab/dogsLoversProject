import {GET_LNG} from '../actions/types'
import axios from "axios"

let initState=""
let exist=localStorage.getItem("userData")
if (typeof exist !== 'undefined' && exist !== null){
    initState=JSON.parse(exist).lon
}


export const LngReducer=(state=initState,action)=>{
    if(action.type===GET_LNG)
    return action.payload
    return state
}