import {GET_RECS} from "../actions/types" 

const initState=""
 export const RecsReducer=(state=initState,action)=>{
     if(action.type===GET_RECS)
     return action.payload
     return state


 }