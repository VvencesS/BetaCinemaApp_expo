import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

export default class ThayDoiMatKhauComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    Thay đổi mật khẩu
                </Text>
                <Button title="Home" onPress={()=>this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}