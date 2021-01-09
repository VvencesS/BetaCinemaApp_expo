import React, { Component } from 'react';
import {
    Text, View, Image,
} from 'react-native';

import { DangNhapScreen, DangXuatScreen } from '../../screenNames';

export default class VoucherComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
            }}>
                <Text>Voucher miễn phí</Text>
            </View>
        );
    }
}
