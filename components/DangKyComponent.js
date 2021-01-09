import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

export default class DangKyComponent extends Component {
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
                <Button title="Đăng nhập" onPress={()=>this.props.navigation.navigate('DangNhap')} />
            </View>
        );
    }
}