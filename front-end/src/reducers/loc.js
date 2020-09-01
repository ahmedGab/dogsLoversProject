import {GET_LOC} from '../actions/types'

let initState=""
export const LocReducer=(state=initState,action)=>{
    if(action.type===GET_LOC)
    return action.payload
    return state
}