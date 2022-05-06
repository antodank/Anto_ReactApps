import countReducers from './counter'
import isLoggedReducer from './isLogged'
import { combineReducers } from 'redux'

export const rootreducer = combineReducers({
    counter : countReducers,
    islogged : isLoggedReducer
}); 
