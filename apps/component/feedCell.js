/**
 * Created by ken on 4/2/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

import styles from '../constants/styles';

export default class FeedCell extends Component {
    render() {
        const {feed} = this.props;
        if (!feed) {
            return <View/>
        }
        return (
            <View
                style={styles.feed}
            >
                <Text>{feed.user.name}</Text>
                <Text>{feed.text}</Text>
            </View>
        )
    }
}