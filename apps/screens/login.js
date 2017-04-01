/**
 * Created by ken on 4/1/17.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


const twitterConfig = {
    appId: '9Yk4QIFY9JLeUdOsxdgynRiEn',
    appSecret: 'e6yinRGhnNT1GzRf43orTV9t1qogL3ovSDVbumcX3cSaRGQv17',
    callback: 'kenk11://authorize',
}

import {connect} from 'react-redux'
import {twitter} from 'react-native-simple-auth';
import Actions from '../redux/action';
import styles from '../constants/styles';

class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title='Login'
                    onPress={this.props.loginTwitter.bind(this.props)}
                />
            </View>
        )
    }
}


const mapStateToProps = state => ({
    ...state
})


const mapDispatchToProps = dispatch => ({
    dispatch,
    loginTwitter () {
        dispatch(Actions.updateAppStatus('LOADING'));
        twitter(twitterConfig)
            .then((info) => {
                dispatch(Actions.updateAppStatus('LOADED'));
                dispatch(Actions.updateUser(info.user));
                dispatch(Actions.updateCredentials(info.credentials));
            }).catch((error) => {
            alert("Login failed!!!");
            console.log("Error login " + JSON.stringify(error));
            dispatch(Actions.updateAppStatus('FAIL'));
        });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)