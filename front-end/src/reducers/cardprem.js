import {GET_CARD} from "../actions/types"


const initState=[]
export const cardPremReducer=(state=initState,action)=>{
if(action.type===GET_CARD){
    return action.payload
}

else return state
}