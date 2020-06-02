import {combineReducers} from 'redux'
import authreducer from './authreducer'
import errorReducer from './errorReducer'
import profilereducer from './profilereducer'

export default combineReducers({
    auth:authreducer,
    errors:errorReducer,
    profile:profilereducer
})
