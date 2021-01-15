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
import ThongTinTaiKhoanComponent from './taikhoan/ThongTinTaiKhoanComponent';
import ThayDoiMatKhauComponent from './taikhoan/ThayDoiMatkhauComponent';


import { urlNowShowing } from '../APILinks';

const LichChieuTheoPhimStack = createStackNavigator();
const RapPhimStack = createStackNavigator();
const VoucherStack = createStackNavigator();
const KhuyenMaiStack = createStackNavigator();
const TaiKhoanStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LichChieuTheoPhimStackScreen({ route }) {
    return (
        <LichChieuTheoPhimStack.Navigator>
            <LichChieuTheoPhimStack.Screen
                name="Phim chiếu"
                component={() => <LichChieuTheoPhimComponent allNowShowingMovie={route.params.allNowShowingMovie} />}
                options={{
                    headerTitle: props => <HeaderBarLichChieu />,
                    headerLeft: null
                }}
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
class TaiKhoanStackScreen extends Component {
    constructor(props) {
        super(props);
        console.log('TaiKhoanStackScreen ', props)
    }
    render() {
        return (
            <TaiKhoanStack.Navigator>
                <TaiKhoanStack.Screen name="Tài khoản" component={() => <TaiKhoanComponent taiKhoan={this.props.taiKhoan} />} />
            </TaiKhoanStack.Navigator>
        );
    }
}

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: 0,
            token: this.props.route.params.token,
            taiKhoan: this.props.route.params.taiKhoan,
            allNowShowingMovie: [],
        }

    }

    render() {
        console.log('token ', this.state.token);
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
                    component={LichChieuTheoPhimComponent}

                />
                <Tab.Screen name="Rạp phim" component={RapPhimComponent} />
                <Tab.Screen name="Voucher" component={VoucherComponent} />
                <Tab.Screen name="Khuyến mại" component={KhuyenMaiComponent} />
                <Tab.Screen name="Tài khoản" component={() => <TaiKhoanComponent taiKhoan={this.state.taiKhoan} />} />
            </Tab.Navigator>
        );
    }
}
