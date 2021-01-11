import React, { Component } from 'react';
import {
    Text, View, Button, ScrollView, TouchableHighlight
} from 'react-native';
import SlideImageComponent from '../slideimage/SlideImageComponent';
import ItemPhimDangChieuComponent from './itemphim/ItemPhimDangChieuComponent';

export default class DangChieuComponent extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View>
                        <SlideImageComponent />
                    </View>
                    {/* <View style={{ flexDirection: 'row' }}>
                        <TouchableHighlight onPress={this.props.navigation.navigate('DatVeTheoPhim')}>
                            <ItemPhimDangChieuComponent />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.props.navigation.navigate('DatVeTheoPhim')}>
                            <ItemPhimDangChieuComponent />
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.props.navigation.navigate('DatVeTheoPhim')}>
                            <ItemPhimDangChieuComponent />
                        </TouchableHighlight>
                        
                    </View> */}
                    <View style={{ flexDirection: 'row' }}>
                        <ItemPhimDangChieuComponent />
                        <ItemPhimDangChieuComponent />
                        <ItemPhimDangChieuComponent />
                    </View>
                    <Button title="Đặt vé theo phim" onPress={() => this.props.navigation.navigate('DatVeTheoPhim')} />
                </View>
            </ScrollView>
        );
    }
}