import {GET_LAT} from '../actions/types'
let initState=""
let exist=localStorage.getItem("userData")
if (typeof exist !== 'undefined' && exist !== null  ){
    initState=JSON.parse(exist).lat
}



export const LatReducer=(state=initState,action)=>{
    if(action.type===GET_LAT)
    return action.payload
    return state
}