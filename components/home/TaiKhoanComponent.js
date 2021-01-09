import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

export default class TaiKhoanComponent extends Component {
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1,flexDirection: 'column'}}>
                <Text>Tài khoản</Text>
                <Button title="Đăng nhập" onPress={()=>this.props.navigation.navigate('DangNhap')}/>
                <Button title="Thông tin tài khoản" onPress={()=>this.props.navigation.navigate('ThongTinTaiKhoan')}/>
                <Button title="Thay đổi mật khẩu" onPress={()=>this.props.navigation.navigate('ThayDoiMatKhau')}/>
            </View>
        );
    }
}