import {GET_PHOTO} from '../actions/types'

let initState=""
export const photoReducer=(state=initState,action)=>{
    if(action.type===GET_PHOTO)
    return action.payload
    return state
}