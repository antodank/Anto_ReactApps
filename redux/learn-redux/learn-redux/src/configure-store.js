import {createStore} from 'redux'
import {countReducer} from './counter/reducer'

export const newStore = createStore(countReducer);