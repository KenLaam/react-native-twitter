/**
 * Created by ken on 4/2/17.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Animated,
} from 'react-native';

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import moment from 'moment';

const ic_verified = require('../resources/ic_verified.png');
const ic_favorited = require('../resources/ic_favorited.png');
const ic_unfavorite = require('../resources/ic_unfavorite.png');
const anim_favorite = require('../resources/anim_favorite.gif');
const ic_retweet = require('../resources/ic_retweet.png');
const ic_unretweet = require('../resources/ic_unretweet.png');

export default class FeedCell extends Component {
    constructor(props) {
        super(props)
        const {feed} = props;
        this.state = {
            feed: feed,
            favIcon: feed.favorited ? ic_favorited : ic_unfavorite,
            retweetIcon: feed.retweeted ? ic_retweet : ic_unretweet,
            bounceValue: new Animated.Value(1),
        }
    }

    retweedFeed = () => {
        alert("retweetFeed")
    }

    favoriteFeed = () => {
        if (!this.state.feed.favorited) {
            this.setState({
                favIcon: anim_favorite,
            })

            this.state.bounceValue.setValue(2);
            Animated.spring(
                this.state.bounceValue,
                {
                    toValue: 1,
                    friction: 1,
                }
            ).start();

            setTimeout(() => {
                this.setState({
                    favIcon: ic_favorited,
                })
            }, 1000)

        }
    }

    userDetail = () => {
        this.props.navigation.navigate('User', {user: 'Trump'})
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
                    <TouchableOpacity
                        onPress={this.userDetail}
                    >
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
                    </TouchableOpacity>
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
                                source={this.state.retweetIcon}
                            />
                        </TouchableOpacity>
                        <Text>{feed.retweet_count}</Text>

                        <TouchableOpacity
                            onPress={this.favoriteFeed}
                        >

                            <Animated.Image
                                style={[styles.icon,
                                {transform: [{scale: this.state.bounceValue}]}
                                ]}
                                source={this.state.favIcon}
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
        width: 30,
        height: 30,
    },


})