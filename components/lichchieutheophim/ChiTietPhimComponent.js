import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

export default class ChiTietPhimComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text>Chi tiết phim</Text>
                <Button title="Xem trailer" onPress={()=>this.props.navigation.navigate('Trailer')}/>
            </View>
        );
    }
}