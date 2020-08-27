import {ERROR_AUTH} from "../actions/types"

const initState=[]
export const userErrorAuth=(state=initState,action)=>{
if(action.type===ERROR_AUTH){
    return action.payload
}
else return state
}