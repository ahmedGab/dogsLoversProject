import {GET_CARDS} from "../actions/types"


const initState=""
export const cardsPremiuimReducer=(state=initState,action)=>{
if(action.type===GET_CARDS){
    return action.payload
}

else return state
}