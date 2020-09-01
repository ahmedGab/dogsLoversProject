import {GET_VIDEO} from '../actions/types'

let initState=""
export const videoReducer=(state=initState,action)=>{
    if(action.type===GET_VIDEO)
    return action.payload
    return state
}