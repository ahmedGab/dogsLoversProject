import {LUNDI,LUNDIPM,MARDI,MARDIPM,MERCREDI,MERCREDIPM,JEUDI,JEUDIPM,VENDREDI,VENDREDIPM,SAMEDI,SAMEDIPM,DIMANCHE,DIMANCHEPM} from '../actions/types'
let initStateLundi="--:--"
let initStateLundipm="--:--"
let initStateMardi="--:--"
let initStateMardipm="--:--"
let initStateMercredi="--:--"
let initStateMercredipm="--:--"
let initStateJeudi="--:--"
let initStateJeudipm="--:--"
let initStateVendredi="--:--"
let initStateVendredipm="--:--"
let initStateSamedi="--:--"
let initStateSamedipm="--:--"
let initStateDimanche="--:--"
let initStateDimanchepm="--:--"

let exist=localStorage.getItem("userData")
if (typeof exist !== 'undefined' && exist !== null){
    initStateLundi=JSON.parse(exist).lundi
    initStateLundipm=JSON.parse(exist).lundipm
    initStateMardi=JSON.parse(exist).mardi
    initStateMardipm=JSON.parse(exist).mardipm
    initStateMercredi=JSON.parse(exist).mercredi
    initStateMercredipm=JSON.parse(exist).mercredipm
    initStateJeudi=JSON.parse(exist).jeudi
    initStateJeudipm=JSON.parse(exist).jeudipm
    initStateVendredi=JSON.parse(exist).vendredi
    initStateVendredipm=JSON.parse(exist).vendredipm
    initStateSamedi=JSON.parse(exist).samedi
    initStateSamedipm=JSON.parse(exist).samedipm
    initStateDimanchepm=JSON.parse(exist).dimanchepm
    initStateDimanche=JSON.parse(exist).dimanche


}


    export const lundi=(state=initStateLundi,action)=>{
    if(action.type===LUNDI)
    return action.payload
    return state
}

export const lundipm=(state=initStateLundipm,action)=>{
    if(action.type===LUNDIPM)
    return action.payload
    return state
}

export const mardi=(state=initStateMardi,action)=>{
    if(action.type===MARDI)
    return action.payload
    return state
}
export const mardipm=(state=initStateMardipm,action)=>{
    if(action.type===MARDIPM)
    return action.payload
    return state
}

export const mercredi=(state=initStateMercredi,action)=>{
    if(action.type===MERCREDI)
    return action.payload
    return state
}
export const mercredipm=(state=initStateMercredipm,action)=>{
    if(action.type===MERCREDIPM)
    return action.payload
    return state
}
export const jeudi=(state=initStateJeudi,action)=>{
    if(action.type===JEUDI)
    return action.payload
    return state
}
export const jeudipm=(state=initStateJeudipm,action)=>{
    if(action.type===JEUDIPM)
    return action.payload
    return state
}
export const vendredi=(state=initStateVendredi,action)=>{
    if(action.type===VENDREDI)
    return action.payload
    return state
}
export const vendredipm=(state=initStateVendredipm,action)=>{
    if(action.type===VENDREDIPM)
    return action.payload
    return state
}
export const samedi=(state=initStateSamedi,action)=>{
    if(action.type===SAMEDI)
    return action.payload
    return state
}
export const samedipm=(state=initStateSamedipm,action)=>{
    if(action.type===SAMEDIPM)
    return action.payload
    return state
}
export const dimanche=(state=initStateDimanche,action)=>{
    if(action.type===DIMANCHE)
    return action.payload
    return state
}
export const dimanchepm=(state=initStateDimanchepm,action)=>{
    if(action.type===DIMANCHEPM)
    return action.payload
    return state
}
  