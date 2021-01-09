import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

import { DangNhapScreen, DangXuatScreen } from '../../screenNames';

export default class RapPhimComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text>Rạp chiếu Beta</Text>
                <Button title="Đặt vé theo rạp" onPress={() => this.props.navigation.navigate('DatVeTheoRap')} />
            </View>
        );
    }
}
