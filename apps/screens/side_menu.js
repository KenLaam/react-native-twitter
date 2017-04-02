/**
 * Created by ken on 4/2/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

import {connect} from 'react-redux';

class SideMenu extends Component {
    render() {
        const user = this.props.user;
        return (
            <View style={{flex: 1, backgroundColor: 'cyan'}}>
                <Text>{user.name}</Text>
            </View>
        )
    }
}


const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({dispatch})


export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)