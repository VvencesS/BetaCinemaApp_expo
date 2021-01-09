import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

export default class DangNhapComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    Đăng nhập
                </Text>
                <Button title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
                <Button title="Đăng ký" onPress={()=>this.props.navigation.navigate('DangKy')} />
            </View>
        );
    }
}