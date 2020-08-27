 
import { combineReducers } from 'redux';
import {userErrorAuth} from './authentification'
import {usersReducer} from './users'
import {photoReducer} from "./photo"



const allReducers = combineReducers({
    errorAuth:userErrorAuth,
    users:usersReducer,
    photo:photoReducer

});

export default allReducers;