/**
 * Created by ken on 4/1/17.
 */
import React, {Component} from 'react';
import {
    Navigator
} from 'react-native';

import {connect} from 'react-redux'
import Login from './screens/login';
import Home from './screens/home';
import Loading from './screens/loading';


class App extends Component {

    renderScene() {
        switch (this.props.appStatus) {
            case 'LOADING':
                return <Loading/>
            case 'LOADED':
                return <Home/>
            default:
                return <Login/>
        }
    }

    render() {
        return this.renderScene()
    }
}

const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(App)