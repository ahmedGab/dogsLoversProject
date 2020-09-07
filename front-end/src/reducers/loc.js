import {GET_LOC} from '../actions/types'
let initState=""
let exist=localStorage.getItem("userData")
if (typeof exist !== 'undefined' && exist !== null){
    initState=JSON.parse(exist).region
}


export const LocReducer=(state=initState,action)=>{

    if(action.type===GET_LOC)
    return action.payload
    return state
}