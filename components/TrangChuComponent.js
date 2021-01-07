import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text, View, Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DangNhapScreen, DangXuatScreen } from '../screenNames';

export default class TrangChuComponent extends Component {
    static navigationOptions = {
        title: 'Trang chủ',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
            }}>
                <Text>Trang chủ</Text>
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() =>
                        navigate('DangNhapScreen', {name: 'Soạn'})
                    }
                >Đăng nhập</Button>
                {/* this.props.navigation.navigate(DetailScreen); */}
            </View>
        );
    }
}
