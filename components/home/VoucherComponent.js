import React, { Component } from 'react';
import {
    Text, View, Image, StyleSheet, TouchableOpacity, Dimensions,
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


import { DangNhapScreen, DangXuatScreen } from '../../screenNames';

const { width: WIDTH } = Dimensions.get('window')

export default class VoucherComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view}>
                    <Text style={styles.title}>BẠN KHÔNG CÓ VOUCHER NÀO !</Text>
                </View>
                <View style={styles.view1}>
                    <Text>Bạn có thể tìm kiếm voucher miễn phí hoặc thêm mới
                        </Text>
                </View>
                <View style={styles.view}>
                    <Text> voucher của bạn!</Text>
                </View>

                <TouchableOpacity
                    style={styles.btnDN}
                    onPress={() => Alert.alert("Thông báo", "Hiện không có voucher miễn phí nào!")}
                >
                    <LinearGradient
                        colors={['#0a64a7', '#258dcf', '#3db1f3']}
                        start={[0, 0]}
                        end={[1, 1]}
                        location={[0.5, 0.15, 1]}
                        style={styles.buttonDN}
                    >
                        <Text style={styles.text}>VOUCHER MIỄN PHÍ</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    view: {
        alignItems: 'center',
    },
    view1: {
        paddingLeft: 40,
    },
    title: {
        color: '#0a64a7',
        fontSize: 17,
        fontWeight: 'bold',
    },
    btnDN: {
        width: WIDTH - 55,
        height: 50,
        justifyContent: 'center',
        borderColor: '#A8A1A1',
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 8,
        left: 20,
        borderRadius: 5,
    },
    buttonDN: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH - 55,
        height: 50,
        borderRadius: 5,
    },
    text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },

})
