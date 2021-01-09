import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

export default class TrailerComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text>Trailer phim</Text>
            </View>
        );
    }
}