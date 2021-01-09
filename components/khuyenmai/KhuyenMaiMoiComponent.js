import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

export default class KhuyenMaiMoiComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text>Khuyến mại mới</Text>
                <Button title="Chi tiết khuyến mại" onPress={() => this.props.navigation.navigate('ChiTietKhuyenMai')} />
            </View>
        );
    }
}