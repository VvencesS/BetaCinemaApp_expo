import React, { Component } from 'react';
import {
    Text, View, Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Components
import SapChieuComponent from '../lichchieutheophim/PhimSapChieuComponent';
import DangChieuComponent from '../lichchieutheophim/PhimDangChieuComponent';
import SuatChieuSomComponent from '../lichchieutheophim/SuatChieuSomComponent';

const LichChieuTab = createMaterialTopTabNavigator();

export default class LichChieuTheoPhimComponent extends Component {
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <LichChieuTab.Navigator
                initialRouteName='ĐangChieu'
                tabBarOptions={{
                    activeTintColor: '#03599d',
                    inactiveTintColor: 'gray',
                    labelStyle: { fontWeight: 'bold', fontSize: 13 }
                }}
                style={{ fontWeight: 'bold' }}
                swipeEnabled={true}
            >
                <LichChieuTab.Screen name="SapChieu" component={SapChieuComponent} options={{ title: "SẮP CHIẾU" }} />
                <LichChieuTab.Screen name="ĐangChieu" component={DangChieuComponent} options={{ title: "ĐANG CHIẾU" }} />
                <LichChieuTab.Screen name="SuatChieuSom" component={SuatChieuSomComponent} options={{ title: "SUẤT CHIẾU SỚM" }} />
            </LichChieuTab.Navigator>
        );
    }
}
