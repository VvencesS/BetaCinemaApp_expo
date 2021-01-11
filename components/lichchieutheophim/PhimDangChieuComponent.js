import React, { Component } from 'react';
import {
    Text, View, Button, ScrollView, TouchableOpacity, Dimensions, FlatList,
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
    {
        anhPhim: 'https://files.betacorp.vn/files/media%2fimages%2f2020%2f11%2f23%2funtitled%2D1%2D155854%2D231120%2D29.jpg',
        tenPhim: 'Chị Mười Ba: 3 Ngày Sinh Tử',
        thoiLuong: '97 phút',
    },
    {
        anhPhim: 'https://files.betacorp.vn/files/media%2fimages%2f2020%2f12%2f25%2f400x633%2Dtsqv%2D162444%2D251220%2D28.jpg',
        tenPhim: 'Thợ săn quái vật',
        thoiLuong: '104 phút',
    },
    {
        anhPhim: 'https://files.betacorp.vn/files/media%2fimages%2f2020%2f10%2f16%2fposter%2Dcsnm%2D6%2D165033%2D161020%2D82.jpg',
        tenPhim: 'Soul - Cuộc sống nhiệm màu',
        thoiLuong: '108 phút',
    },
]

export default class DangChieuComponent extends Component {
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