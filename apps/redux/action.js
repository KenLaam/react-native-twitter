/**
 * Created by ken on 4/1/17.
 */
import {ActionTypes} from '../constants/config'

const Actions = {
    updateAppStatus (appStatus) {
        return {
            type: ActionTypes.UPDATE_APP_STATUS,
            appStatus
        }
    },

    updateUser (user) {
        return {
            type: ActionTypes.UPDATE_USER,
            user
        }
    },

    updateCredentials (credentials) {
        return {
            type: ActionTypes.UPDATE_CREDENTIALS,
            credentials
        }
    },

    updateHomeTimeline (feeds) {
        return {
            type: ActionTypes.UPDATE_LIST_TIMELINE,
            feeds
        }
    }

}

export default Actions