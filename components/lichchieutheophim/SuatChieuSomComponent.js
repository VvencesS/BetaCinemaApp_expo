import React, { Component } from 'react';
import {
    Text, View, Image, ScrollView, FlatList, TouchableOpacity, Dimensions,
} from 'react-native';

import SlideImageComponent from '../slideimage/SlideImageComponent';
import ItemPhimDangChieuComponent from './itemphim/ItemPhimDangChieuComponent';

var screen = Dimensions.get('window');
const listPhim = [
    {
        anhPhim: 'https://files.betacorp.vn/files/media%2fimages%2f2020%2f10%2f26%2fposter%2Dteaser%2D3%2D4m%2D155930%2D261020%2D94.jpg',
        tenPhim: '“Em” Là Của Em',
        thoiLuong: '98 phút',
    },
]

export default class SuatChieuSomComponent extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ justifyContent: 'center', marginTop: 10, marginBottom: 20 }}>
                        <SlideImageComponent />
                    </View>
                    <FlatList
                        data={listPhim}
                        numColumns={3}
                        horizontal={false}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChiTietPhim', listPhim)}>
                                    <ItemPhimDangChieuComponent item={item} index={index} parentFlatList={this} />
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item, index) => item.tenPhim}
                    />
                </View>
            </ScrollView>
        );
    }
}