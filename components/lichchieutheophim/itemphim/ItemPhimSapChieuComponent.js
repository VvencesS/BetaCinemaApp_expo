import React, { Component } from 'react';
import {
    Text, View, Button, ScrollView, Image, Dimensions, StyleSheet, TouchableHighlight
} from 'react-native';

var screen = Dimensions.get('window');

export default class ItemPhimDangChieuComponent extends Component {
    constructor(props) {
        super(props);
        console.log('ItemPhimDangChieuComponent', props);
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }} style={styles.itemPhim}>

                <View style={{ flex: 8, }}>
                    <Image source={{uri: this.props.item.anhPhim}} style={styles.filmImg} />
                </View>
                <View style={{ flex: 2, alignItems: 'center' }}>
                    <Text style={styles.filmName}>{this.props.item.tenPhim}</Text>
                    <Text style={styles.filmTime}>{this.props.item.thoiLuong}</Text>
                </View >

            </View>
            // <Button title="Đặt vé theo phim" onPress={() => this.props.navigation.navigate('DatVeTheoPhim')} />

        );
    }
}

const styles = StyleSheet.create({
    itemPhim: {
        width: (screen.width - 30) / 3,
        height: ((screen.width - 30) / 3) * 1.9,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
    },
    filmImg: {
        width: '100%',
        height: '100%',
        borderRadius: 7,
    },
    filmName: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 14,
        paddingTop: 10,
    },
    filmTime: {
        flex: 1,
        fontSize: 13,
        color: 'gray'
    }
});
