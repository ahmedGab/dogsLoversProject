import {GET_LNG} from '../actions/types'

let initState=""
export const LngReducer=(state=initState,action)=>{
    if(action.type===GET_LNG)
    return action.payload
    return state
}