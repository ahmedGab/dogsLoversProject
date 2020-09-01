import {LUNDI,LUNDIPM,MARDI,MARDIPM,MERCREDI,MERCREDIPM,JEUDI,JEUDIPM,VENDREDI,VENDREDIPM,SAMEDI,SAMEDIPM,DIMANCHE,DIMANCHEPM} from '../actions/types'
let initState=[]

    export const lundi=(state=initState,action)=>{
    if(action.type===LUNDI)
    return action.payload
    return state
}

export const lundipm=(state=initState,action)=>{
    if(action.type===LUNDIPM)
    return action.payload
    return state
}

export const mardi=(state=initState,action)=>{
    if(action.type===MARDI)
    return action.payload
    return state
}
export const mardipm=(state=initState,action)=>{
    if(action.type===MARDIPM)
    return action.payload
    return state
}

export const mercredi=(state=initState,action)=>{
    if(action.type===MERCREDI)
    return action.payload
    return state
}
export const mercredipm=(state=initState,action)=>{
    if(action.type===MERCREDIPM)
    return action.payload
    return state
}
export const jeudi=(state=initState,action)=>{
    if(action.type===JEUDI)
    return action.payload
    return state
}
export const jeudipm=(state=initState,action)=>{
    if(action.type===JEUDIPM)
    return action.payload
    return state
}
export const vendredi=(state=initState,action)=>{
    if(action.type===VENDREDI)
    return action.payload
    return state
}
export const vendredipm=(state=initState,action)=>{
    if(action.type===VENDREDIPM)
    return action.payload
    return state
}
export const samedi=(state=initState,action)=>{
    if(action.type===SAMEDI)
    return action.payload
    return state
}
export const samedipm=(state=initState,action)=>{
    if(action.type===SAMEDIPM)
    return action.payload
    return state
}
export const dimanche=(state=initState,action)=>{
    if(action.type===DIMANCHE)
    return action.payload
    return state
}
export const dimanchepm=(state=initState,action)=>{
    if(action.type===DIMANCHEPM)
    return action.payload
    return state
}
  