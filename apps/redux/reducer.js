/**
 * Created by ken on 4/1/17.
 */
import {combineReducers} from 'redux'
import ImmutableJS from 'immutable'
import {Types} from '../constants/actions'

const appStatusReducer = (state = '', action) => {
    switch (action.type) {
        case Types.APP_STATUS:
            return action.appStatus
        default:
            return state
    }
}

const userReducer = (state = ImmutableJS.fromJS({}), action) => {
    switch (action.type) {
        case Types.UPDATE_USER:
            return ImmutableJS.fromJS(action.user)
        default:
            return state
    }
}

const credentialsReducer = (state = ImmutableJS.fromJS({}), action) => {
    switch (action.type) {
        case Types.UPDATE_CREDENTIALS:
            return ImmutableJS.fromJS(action.credentials)
        default:
            return state
    }
}

const reducer = combineReducers({
    appStatus: appStatusReducer,
    user: userReducer,
    credentials: credentialsReducer,
})


export default reducer