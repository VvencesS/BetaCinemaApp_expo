import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Components
import LichChieuTheoPhimComponent from './home/LichChieuTheoPhimComponent';
import RapPhimComponent from './home/RapPhimComponent';
import VoucherComponent from './home/VoucherComponent';
import KhuyenMaiComponent from './home/KhuyenMaiComponent';
import TaiKhoanComponent from './home/TaiKhoanComponent';
import HeaderBarLichChieu from './home/HeaderBarLichChieu';

const LichChieuTheoPhimStack = createStackNavigator();
const RapPhimStack = createStackNavigator();
const VoucherStack = createStackNavigator();
const KhuyenMaiStack = createStackNavigator();
const TaiKhoanStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LichChieuTheoPhimStackScreen() {
    return (
        <LichChieuTheoPhimStack.Navigator>
            <LichChieuTheoPhimStack.Screen
                name="Phim chiếu"
                component={LichChieuTheoPhimComponent}
                options={{ headerTitle: props => <HeaderBarLichChieu {...props} /> }}
            />
        </LichChieuTheoPhimStack.Navigator>
    );
}
function RapPhimStackScreen() {
    return (
        <RapPhimStack.Navigator>
            <RapPhimStack.Screen name="Rạp phim" component={RapPhimComponent} />
        </RapPhimStack.Navigator>
    );
}
function VoucherStackScreen() {
    return (
        <VoucherStack.Navigator>
            <VoucherStack.Screen name="Voucher" component={VoucherComponent} />
        </VoucherStack.Navigator>
    );
}
function KhuyenMaiStackScreen() {
    return (
        <KhuyenMaiStack.Navigator>
            <KhuyenMaiStack.Screen name="Khuyến mại" component={KhuyenMaiComponent} />
        </KhuyenMaiStack.Navigator>
    );
}
function TaiKhoanStackScreen() {
    return (
        <TaiKhoanStack.Navigator>
            <TaiKhoanStack.Screen name="Tài khoản" component={TaiKhoanComponent} />
        </TaiKhoanStack.Navigator>
    );
}

export default class HomeComponent extends Component {
    render() {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Phim chiếu') {
                            return (
                                <Entypo name="video" size={size} color={color} />
                            );
                        } else if (route.name === 'Rạp phim') {
                            return (
                                <Ionicons name="location-sharp" size={size} color={color} />
                            );
                        } else if (route.name === 'Voucher') {
                            return (
                                <MaterialCommunityIcons name="ticket-confirmation-outline" size={size} color={color} />
                            );
                        } else if (route.name === 'Khuyến mại') {
                            return (
                                <Ionicons name="gift" size={size} color={color} />
                            );
                        } else if (route.name === 'Tài khoản') {
                            return (
                                <AntDesign name="user" size={size} color={color} />
                            );
                        }
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#03599d',
                    inactiveTintColor: 'gray',
                }}
                style={{ fontWeight: 'bold' }}
            >
                <Tab.Screen
                    name="Phim chiếu"
                    component={LichChieuTheoPhimStackScreen}

                />
                <Tab.Screen name="Rạp phim" component={RapPhimStackScreen} />
                <Tab.Screen name="Voucher" component={VoucherStackScreen} />
                <Tab.Screen name="Khuyến mại" component={KhuyenMaiStackScreen} />
                <Tab.Screen name="Tài khoản" component={TaiKhoanStackScreen} />
            </Tab.Navigator>
        );
    }
}
