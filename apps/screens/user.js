/**
 * Created by ken on 4/2/17.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ListView,
} from 'react-native';

import {connect} from 'react-redux';
import {getHeaders} from 'react-native-simple-auth/lib/utils/oauth1';
import {TwitterConfig} from '../constants/config';
import Actions from '../redux/action';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

class User extends Component {

    static navigationOptions = {
        header: (prop) => ({
            title: 'Profile',
        }),
    }

    render() {
        const user = this.props.user;
        return (
            <View
                style={{flex: 1, backgroundColor: 'white'}}
            >
                <Image
                    style={styles.banner}
                    source={{uri: user.profile_banner_url}}
                    indicator={ProgressBar}
                />
                <View
                    style={{padding: 8}}
                >
                    <View
                        style={{flexDirection: 'row'}}
                    >
                        <Image
                            style={styles.avatar}
                            source={{uri: user.profile_image_url_https}}
                            indicator={ProgressBar}
                        />

                        <View
                            style={{justifyContent: 'center'}}
                        >
                            <Text style={styles.name}>{user.name}</Text>
                            <Text style={styles.screen_name}>@{user.screen_name}</Text>
                        </View>
                    </View>

                    <View
                        style={{flexDirection: 'row', justifyContent: 'space-around', }}
                    >
                        <View
                            style={{flex: 1, alignItems: 'center'}}
                        >
                            <Text>{user.statuses_count}</Text>
                            <Text>tweets</Text>
                        </View>
                        <View
                            style={{flex: 1, alignItems: 'center'}}
                        >
                            <Text>{user.friends_count}</Text>
                            <Text>followings</Text>
                        </View>
                        <View
                            style={{flex: 1, alignItems: 'center'}}
                        >
                            <Text>{user.followers_count}</Text>
                            <Text>followers</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    banner: {
        height: 150,

    },

    avatar: {
        marginTop: 4,
        marginRight: 8,
        width: 60,
        height: 60,
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    screen_name: {
        fontSize: 12,
        color: "#748290",
    },
})

const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(User)