 
import { combineReducers } from 'redux';
import {userErrorAuth} from './authentification'
import {usersReducer} from './users'
import {photoReducer} from "./photo"
import {videoReducer} from "./video"
import {LatReducer} from "./lat"
import {LngReducer} from "./lng"
import {LocReducer} from "./loc"
import {lundi,lundipm,mardi,mardipm,mercredi,mercredipm,jeudi,jeudipm,vendredi,vendredipm,samedi,samedipm,dimanche,dimanchepm} from "./workingHours"






const allReducers = combineReducers({
    errorAuth:userErrorAuth,
    users:usersReducer,
    photo:photoReducer,
    video:videoReducer,
    lat:LatReducer,
    lng:LngReducer,
    loc:LocReducer,
    lundi:lundi,
    lundipm:lundipm,
    mardi:mardi,
    mardipm:mardipm,
    mercredi:mercredi,
    mercredipm:mercredipm,
    jeud:jeudi,
    jeudipm:jeudipm,
    vendredi:vendredi,
    vendredipm:vendredipm,
    samedi:samedi,
    samedipm:samedipm,
    dimanche:dimanche,
    dimanchepm:dimanchepm,





});

export default allReducers;