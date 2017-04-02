/**
 * Created by ken on 4/1/17.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

import {connect} from 'react-redux'
import {twitter} from 'react-native-simple-auth';
import Actions from '../redux/action';
import styles from '../constants/styles';
import {AppStatus, TwitterConfig} from '../constants/config';

class Login extends Component {

    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={this.props.loginTwitter}
            >
                <Image
                    style={{width: 200, height: 200}}
                    source={require('../resources/twitter_bg.png')}
                />
            </TouchableOpacity>
        )
    }
}


const mapStateToProps = state => ({
    ...state
})


const mapDispatchToProps = dispatch => ({
    dispatch,
    loginTwitter () {
        dispatch(Actions.updateAppStatus(AppStatus.LOADING));
        twitter(TwitterConfig)
            .then((info) => {
                dispatch(Actions.updateUser(info.user));
                dispatch(Actions.updateCredentials(info.credentials));
                dispatch(Actions.updateAppStatus(AppStatus.IS_LOGGED));
            }).catch((error) => {
            alert("Login failed!!!");
            dispatch(Actions.updateAppStatus('FAIL'));
        });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)