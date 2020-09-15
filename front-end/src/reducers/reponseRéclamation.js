import {REP_REC} from "../actions/types" 

const initState=""
 export const RepReducer=(state=initState,action)=>{
     if(action.type===REP_REC)
     return action.payload
     return state


 }