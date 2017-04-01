/**
 * Created by ken on 4/1/17.
 */
import {combineReducers} from 'redux'
import ImmutableJS from 'immutable'

const appStatusReducer = (state = 'INIT', action) => {
    switch (action.type) {
        case 'UPDATE_APP_STATUS':
            return action.appStatus
        default:
            return state
    }
}

const userInfoReducer = (state = ImmutableJS.fromJS({}), action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return ImmutableJS.fromJS(action.user)
        default:
            return state
    }
}

const userCredentialsReducer = (state = ImmutableJS.fromJS({}), action) => {
    switch (action.type) {
        case 'UPDATE_USER_CREDENTIALS':
            return ImmutableJS.fromJS(action.accessToken)
        default:
            return state
    }
}


const reducer = combineReducers({
    appStatus: appStatusReducer,
    userInfo: userInfoReducer,
    userCredentials: userCredentialsReducer,
})


export default reducer