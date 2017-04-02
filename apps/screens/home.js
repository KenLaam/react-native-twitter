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
import styles from '../constants/styles';
import {getHeaders} from 'react-native-simple-auth/lib/utils/oauth1';
import {TwitterConfig} from '../constants/config';
import Actions from '../redux/action';
import FeedCell from '../component/feedCell'

class Home extends Component {
    constructor() {
        super()
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            refreshing: false,
            ds
        }
    }

    componentWillMount() {
        this.props.fetchTimeLine()
    }

    renderRow = (feed) => {
        return(
            <FeedCell feed={feed}/>
        )
    }

    render() {
        let feeds = this.props.feeds;
        if (!feeds) {
            feeds = []
        }
        const dataSource = this.state.ds.cloneWithRows(feeds);
        return (
            <ListView
                enableEmptySections={true}
                dataSource={dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}


const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({dispatch})

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    async fetchTimeLine () {
        console.log(stateProps.user.name);
        const httpMethod = 'GET';
        const url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
        const headers = getHeaders(url, {}, {}, TwitterConfig.appId, TwitterConfig.appSecret, httpMethod, stateProps.credentials.oauth_token, stateProps.credentials.oauth_token_secret);

        const response = await fetch(url, {
            method: httpMethod,
            headers,
        });
        const json = await response.json();
        dispatchProps.dispatch(Actions.updateHomeTimeline(json))
        console.log('user_timeline', json);
    },
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Home)