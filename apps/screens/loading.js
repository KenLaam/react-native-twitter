/**
 * Created by ken on 4/1/17.
 */
import React, {Component} from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

export default class Loading extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator
                    size="large"
                />
            </View>
        )
    }
}