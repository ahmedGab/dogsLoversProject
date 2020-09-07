import {GET_PHOTO,GET_VIDEO,GET_COVER} from "./types"



export const getPhoto=(payload)=>({
    type:GET_PHOTO,
    payload
})


export const getCoverPhoto=(payload)=>({
    type:GET_COVER,
    payload
})

export const getVideo=(payload)=>({
    type:GET_VIDEO,
    payload
})

