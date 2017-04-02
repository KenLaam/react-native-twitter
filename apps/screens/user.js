/**
 * Created by ken on 4/2/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    ListView,
} from 'react-native';

import {connect} from 'react-redux';
import {getHeaders} from 'react-native-simple-auth/lib/utils/oauth1';
import {TwitterConfig} from '../constants/config';
import Actions from '../redux/action';

class User extends Component {
    render() {
        return (
            <Text>User</Text>
        )
    }
}


const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(User)