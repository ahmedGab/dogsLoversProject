import {GET_LAT,GET_LNG} from "./types"



export const getLat=(payload)=>({
    type:GET_LAT,
    payload
})

export const getLng=(payload)=>({
    type:GET_LNG,
    payload
})
