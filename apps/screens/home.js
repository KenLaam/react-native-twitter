/**
 * Created by ken on 4/1/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

import {connect} from 'react-redux';
import styles from '../constants/styles';


class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>HOME PAGE</Text>
            </View>
        )
    }
}


const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({dispatch})

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    fetchAccessToken () {
    },
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Home)