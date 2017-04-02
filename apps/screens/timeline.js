/**
 * Created by ken on 4/2/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    ListView,
    TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux';
import {getHeaders} from 'react-native-simple-auth/lib/utils/oauth1';
import {TwitterConfig} from '../constants/config';
import Actions from '../redux/action';
import FeedCell from '../component/feedCell'

class Timeline extends Component {
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
        if (!feed) {
            return <View/>
        }
        return (
            <FeedCell feed={feed}/>
        )
    }

    static navigationOptions = {
        header: (prop) => ({
            title: 'Home',
            left: (
                <View>
                    <TouchableOpacity
                    >
                        <Image
                            source={require('../resources/ic_menu.png')}
                        />
                    </TouchableOpacity>
                </View>
            )
        }),
    }

    render() {
        let feeds = this.props.feeds;
        if (!feeds) {
            feeds = []
        }
        const dataSource = this.state.ds.cloneWithRows(feeds);
        return (
            <View>
                <ListView
                    enableEmptySections={true}
                    dataSource={dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }
}


const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({dispatch})

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    async fetchTimeLine () {
        const httpMethod = 'GET';
        const url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
        const headers = getHeaders(url, {}, {}, TwitterConfig.appId, TwitterConfig.appSecret, httpMethod, stateProps.credentials.oauth_token, stateProps.credentials.oauth_token_secret);

        const response = await fetch(url, {
            method: httpMethod,
            headers,
        });
        const json = await response.json();
        dispatchProps.dispatch(Actions.updateHomeTimeline(json))
        console.log('user_timeline', JSON.stringify(json[0]));
    },
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Timeline)