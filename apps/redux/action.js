/**
 * Created by ken on 4/1/17.
 */

const Actions = {
    updateAppStatus (appStatus) {
        return {
            type: 'UPDATE_APP_STATUS',
            appStatus
        }
    },

    updateUserInfo (user) {
        return {
            type: 'UPDATE_USER_INFO',
            user
        }
    },

    updateUserCredentials (credentials) {
        return {
            type: 'UPDATE_USER_CREDENTIALS',
            credentials
        }
    },
}

export default Actions