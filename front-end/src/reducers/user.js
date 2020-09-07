import {GET_USER} from '../actions/types'
let initState=[]
export const userReducer=(state=initState,action)=>{
    if(action.type===GET_USER)
    return action.payload
    return state
}