import React, { Component } from 'react';
import {
    Text, View, Image,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Components
import KhuyenMaiMoiComponent from '../khuyenmai/KhuyenMaiMoiComponent';
import TinBenLeComponent from '../khuyenmai/TinBenLeComponent';

const KhuyenMaiTab = createMaterialTopTabNavigator();

export default class KhuyenMaiComponent extends Component {
    render() {
        return (
            <KhuyenMaiTab.Navigator
                initialRouteName='KhuyenMaiMoi'
                tabBarOptions={{
                    activeTintColor: '#03599d',
                    inactiveTintColor: 'gray',
                    labelStyle: { fontWeight: 'bold', fontSize: 16 }
                }}
                style={{ fontWeight: 'bold' }}
                swipeEnabled={true}
            >
                <KhuyenMaiTab.Screen name="KhuyenMaiMoi" component={KhuyenMaiMoiComponent} options={{ title: "KHUYẾN MẠI MỚI" }} />
                <KhuyenMaiTab.Screen name="TinBenLe" component={TinBenLeComponent} options={{ title: "TIN BÊN LỀ" }} />
            </KhuyenMaiTab.Navigator>
        );
    }
}
