import {GET_PHOTO,GET_VIDEO} from "./types"



export const getPhoto=(payload)=>({
    type:GET_PHOTO,
    payload
})

export const getVideo=(payload)=>({
    type:GET_VIDEO,
    payload
})

