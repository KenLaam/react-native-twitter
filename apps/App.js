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

import {twitter} from 'react-native-simple-auth';


export default class App extends Component {
    _login = () => {
        twitter(twitterConfig)
            .then((info) => {
                // info.user - user details from the provider
                // info.credentials - tokens from the provider
                console.log("KenK11 user " + JSON.stringify(info.user))
                console.log("KenK11 credentials " + JSON.stringify(info.credentials))
            }).catch((error) => {
            // error.code
            // error.description
            console.log("KenK11 error " + error)
        });
    }


    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                <Button
                    title='Login'
                    onPress={this._login}
                />
            </View>
        )
    }
}