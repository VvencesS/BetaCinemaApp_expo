import React, { Component } from 'react';
import {
    Text, View, Image,
} from 'react-native';

export default class SuatChieuSomComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
            }}>
                <Text>Suất chiếu sớm</Text>
            </View>
        );
    }
}