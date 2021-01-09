import React, { Component } from 'react';
import {
    Text, View, Button, ScrollView
} from 'react-native';

export default class DangChieuComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, }}>
                <Text style={{ flex: 1, textAlign: 'center' }}>Đang chiếu</Text>
                <Button title="Đặt vé theo phim" onPress={() => this.props.navigation.navigate('DatVeTheoPhim')} />
            </View>
        );
    }
}