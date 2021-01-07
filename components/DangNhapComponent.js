import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text, View
} from 'react-native';
import { DangNhapScreen, DangKyScreen } from '../screenNames';

export default class DangNhapComponent extends Component {
    static navigationOptions = {
        title: 'Đăng nhập',
        headerStyle: {
            backgroundColor: 'blue'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        const nameUser = this.props.route.params.name;
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'mediumseagreen',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    Đăng nhập {nameUser}
                </Text>
                <Button
                    onPress={() =>
                        navigate(DangKyScreen)
                    }
                >Đăng ký</Button>
            </View>
        );
    }
}