/**
 * Created by ken on 4/2/17.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import moment from 'moment';

const ic_verified = require('../resources/ic_verified.png');
const ic_favorited = require('../resources/ic_favorited.png');
const ic_unfavorite = require('../resources/ic_unfavorite.png');
const ic_retweet = require('../resources/ic_retweet.png');
const ic_unretweet = require('../resources/ic_unretweet.png');

export default class FeedCell extends Component {

    retweedFeed = () => {
        alert("retweetFeed")
    }

    favoriteFeed = () => {
        alert("favoriteFeed")
    }


    render() {
        const {feed} = this.props;
        return (
            <View
                style={styles.container}
            >
                <Image
                    source={{uri: feed.user.profile_image_url_https}}
                    style={styles.avatar}
                    indicator={ProgressBar}
                />
                <View>
                    <View
                        style={styles.row}
                    >
                        <Text style={styles.name}>{feed.user.name}</Text>
                        {feed.user.verified ?
                            <Image
                                style={styles.icon}
                                source={ic_verified}
                            /> : null}
                    </View>
                    <Text style={styles.screen_name}>@{feed.user.screen_name}</Text>
                    <Text
                        style={styles.screen_name}>{moment(feed.created_at, "ddd MMM DD HH:mm:ss Z YYYY").fromNow()}</Text>
                    <Text> {feed.text}</Text>
                    <View
                        style={styles.row}
                    >
                        <TouchableOpacity
                            onPress={this.retweedFeed}
                        >
                            <Image
                                style={styles.icon}
                                source={feed.retweeted? ic_retweet: ic_unretweet}
                            />
                        </TouchableOpacity>
                        <Text>{feed.retweet_count}</Text>

                        <TouchableOpacity
                            onPress={this.favoriteFeed}
                        >
                            <Image
                                style={styles.icon}
                                source={feed.favorited? ic_favorited: ic_unfavorite}
                            />
                        </TouchableOpacity>
                        <Text>{feed.favorite_count}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 4,
        padding: 4,
        flexDirection: 'row',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    avatar: {
        marginTop: 4,
        marginRight: 8,
        width: 45,
        height: 45,
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    screen_name: {
        fontSize: 12,
        color: "#748290",
    },

    icon: {
        width: 16,
        height: 16,
    }

})