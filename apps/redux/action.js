/**
 * Created by ken on 4/1/17.
 */
import {Types} from '../constants/actions'

const Actions = {
    updateAppStatus (appStatus) {
        return {
            type: Types.APP_STATUS,
            appStatus
        }
    },

    updateUser (user) {
        return {
            type: Types.UPDATE_USER,
            user
        }
    },

    updateCredentials (credentials) {
        return {
            type: Types.UPDATE_CREDENTIALS,
            credentials
        }
    },

}

export default Actions