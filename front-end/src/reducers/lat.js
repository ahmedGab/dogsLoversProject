import {GET_LAT} from '../actions/types'

let initState=""
export const LatReducer=(state=initState,action)=>{
    if(action.type===GET_LAT)
    return action.payload
    return state
}