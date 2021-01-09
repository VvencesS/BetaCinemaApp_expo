import React, { Component } from 'react';
import {
    Text, View, Button,
} from 'react-native';

export default class DatVeTheoRapComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <Text>Đặt vé theo rạp</Text>
                <Button title="Xem trailer" onPress={()=>this.props.navigation.navigate('Trailer')}/>
            </View>
        );
    }
}