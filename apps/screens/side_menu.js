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
    TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import Image from 'react-native-image-progress';

class SideMenu extends Component {


    clickHome = () => {
        alert("Click Home")
    }

    clickProfile = () => {
        alert("Click Profile")
    }

    clickMention = () => {
        alert("Click Mention")
    }


    render() {
        const user = this.props.user;
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View
                    style={styles.row}
                >
                    <Image
                        style={styles.avatar}
                        source={{uri: user.profile_image_url_https}}
                    />
                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.screen_name}>@{user.screen_name}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={this.clickHome}>
                        <Text style={styles.menu}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.clickProfile}>
                        <Text style={styles.menu}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.clickMention}>
                        <Text style={styles.menu}>Mention</Text>
                    </TouchableOpacity>
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

    menu: {
        fontSize: 16,
        paddingLeft: 8,
        marginTop: 8,
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

    icon: {
        width: 30,
        height: 30,
    },
})


const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({dispatch})


export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)