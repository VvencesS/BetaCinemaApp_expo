import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

export default class SapChieuComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text>Sắp chiếu</Text>
                <Button title="Chi tiết phim" onPress={()=>this.props.navigation.navigate('ChiTietPhim')}/>
            </View>
        );
    }
}