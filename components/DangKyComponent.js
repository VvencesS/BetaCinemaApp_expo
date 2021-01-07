import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';

export default class DangKyComponent extends Component {
    static navigationOptions = {
        title: 'Đăng ký',
    };
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'tomato',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    Đăng ký
                </Text>
            </View>
        );
    }
}