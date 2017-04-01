/**
 * Created by ken on 4/1/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

import {connect} from 'react-redux'

class Home extends Component {


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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