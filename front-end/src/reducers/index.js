 
import { combineReducers } from 'redux';
import {userErrorAuth} from './authentification'
import {usersReducer} from './users'
import {userReducer} from './user'
import {photoReducer} from "./photo"
import {coverPhotoReducer} from "./coverPhoto"

import {videoReducer} from "./video"
import {LatReducer} from "./lat"
import {LngReducer} from "./lng"
import {LocReducer} from "./loc"
import {lundi,lundipm,mardi,mardipm,mercredi,mercredipm,jeudi,jeudipm,vendredi,vendredipm,samedi,samedipm,dimanche,dimanchepm} from "./workingHours"
import {RepReducer} from "./reponseRéclamation"
import {RecsReducer} from "./reclamations"
import {countPremiuimReducer} from "./Countspremuim"
import {cardsPremiuimReducer} from "./cardsPremiuim"








const allReducers = combineReducers({
    errorAuth:userErrorAuth,
    users:usersReducer,
    user:userReducer,
    photo:photoReducer,
    coverPhoto:coverPhotoReducer,
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
    jeudi:jeudi,
    jeudipm:jeudipm,
    vendredi:vendredi,
    vendredipm:vendredipm,
    samedi:samedi,
    samedipm:samedipm,
    dimanche:dimanche,
    dimanchepm:dimanchepm,
    reponse:RepReducer,
    recs:RecsReducer,
    countPrem:countPremiuimReducer,
    cardsPrem:cardsPremiuimReducer




});

export default allReducers;