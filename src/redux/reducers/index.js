import {combineReducers} from 'redux'
import {characterReducer} from "./characters";
import {loadingReducers} from "./loading";
import {locationReducers} from "./location";
import {episodeReducers} from "./episode";

export const rootReducer = combineReducers({
    characterReducer,
    loadingReducers,
    locationReducers,
    episodeReducers
})
