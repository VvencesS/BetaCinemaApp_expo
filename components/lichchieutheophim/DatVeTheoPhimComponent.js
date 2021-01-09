import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

export default class DatVeTheoPhimComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text>Đặt vé theo phim</Text>
                <Button title="Chi tiết phim" onPress={()=>this.props.navigation.navigate('ChiTietPhim')}/>
            </View>
        );
    }
}