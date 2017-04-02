/**
 * Created by ken on 4/1/17.
 */
import {combineReducers} from 'redux'
import ImmutableJS from 'immutable'
import {ActionTypes} from '../constants/config'

const appStatusReducer = (state = '', action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_APP_STATUS:
            return action.appStatus;
        default:
            return state;
    }
}

const userReducer = (state = ImmutableJS.fromJS({}), action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_USER:
            return action.user;
        default:
            return state;
    }
}

const credentialsReducer = (state = ImmutableJS.fromJS({}), action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_CREDENTIALS:
            return action.credentials;
        default:
            return state;
    }
}

const homeTimelineReducer = (state = ImmutableJS.fromJS({}), action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_LIST_TIMELINE:
            return action.feeds;
        default:
            return state;
    }
}

const reducer = combineReducers({
    appStatus: appStatusReducer,
    user: userReducer,
    credentials: credentialsReducer,
    feeds: homeTimelineReducer,
})


export default reducer