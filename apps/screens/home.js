/**
 * Created by ken on 4/1/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    ListView,
} from 'react-native';

import {connect} from 'react-redux';
import {StackNavigator} from 'react-navigation'
import Timeline from './timeline';
import User from './user';

const AppStack = StackNavigator({
    User: {screen: User},
    Timeline: {screen: Timeline},
})

class Home extends Component {
    render() {
        return (
            <AppStack/>
        )
    }
}


const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(Home)