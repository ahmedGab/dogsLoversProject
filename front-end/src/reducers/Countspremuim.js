import {GET_PREM,ADD_PREM} from "../actions/types"


const initState=""
export const countPremiuimReducer=(state=initState,action)=>{
if(action.type===GET_PREM){
    return action.payload
}
if(action.type===ADD_PREM){
    return [action.payload,...state]
}
else return state
}