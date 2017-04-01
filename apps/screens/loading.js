/**
 * Created by ken on 4/1/17.
 */
import React, {Component} from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

import styles from '../constants/styles';

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    size="large"
                />
            </View>
        )
    }
}