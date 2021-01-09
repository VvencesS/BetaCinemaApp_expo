import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

export default class TinBenLeComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text>Tin bên lề</Text>
                <Button title="Chi tiết tin bên lề" onPress={() => this.props.navigation.navigate('ChiTietTinBenLe')} />
            </View>
        );
    }
}