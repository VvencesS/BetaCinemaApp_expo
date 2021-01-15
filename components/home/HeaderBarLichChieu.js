import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Button, Pressable, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import logo from '../../images/logo.png';
import avatar from '../../images/avatar.png';

const styles = StyleSheet.create({
    tinyLogo: {
        width: 90,
        height: 48,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    textBold: { fontWeight: 'bold' },
    title: {
        fontSize: 17,
        color: '#000',
    },
});

export default class HeaderBarLichChieu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', }}>
                <View>
                    <Image source={logo} style={styles.tinyLogo} />
                </View>
            </View>
        );

    }
}