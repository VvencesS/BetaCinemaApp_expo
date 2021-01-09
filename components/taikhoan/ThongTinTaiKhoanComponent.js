import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

export default class ThongTinTaiKhoanComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'tomato',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    Thông tin tài khoản
                </Text>
                <Button title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}