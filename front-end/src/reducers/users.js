import {GET_ALL_USERS} from '../actions/types'
let initState=[]
export const usersReducer=(state=initState,action)=>{
    if(action.type===GET_ALL_USERS)
    return action.payload
    return state
}