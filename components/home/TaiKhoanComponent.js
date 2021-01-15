import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    ImageBackground,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

import ThongTinTaiKhoanComponent from '../taikhoan/ThongTinTaiKhoanComponent';

const avatar = { uri: "https://avatars2.githubusercontent.com/u/54681614?s=460&u=665b6bfff00f4ae8524deda9a68fb526090815a9&v=4" };
const code = { uri: "https://raw.githubusercontent.com/VvencesS/BetaCinemaApp_expo/anhs/images/code.jpg" };

import { urlLocalhost } from '../../APILinks';

export default class TaiKhoanComponent extends Component {
    constructor(props) {
        super(props);
        console.log('TaiKhoanComponent ', props);
        this.setState = {
            taiKhoan: this.props.taiKhoan
        }
    }

    _onPressThongTinTK = () => {
        // alert('You add item');
        this.refs.thongTinTKModal.showThongTinTKModal();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <ImageBackground
                            style={styles.background}
                            source={{ uri: urlLocalhost + this.props.taiKhoan.anhdaidien }}
                        ></ImageBackground>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.member}>
                            <View>
                                <Image
                                    style={styles.avatar}
                                    source={{ uri: urlLocalhost + this.props.taiKhoan.anhdaidien }}
                                ></Image>
                            </View>
                            <View>
                                <Text style={styles.name}>{this.props.taiKhoan.hoten}</Text>
                            </View>
                            <View style={styles.card}>
                                <Text style={styles.card_text}>Thẻ thành viên</Text>
                                <Text style={styles.card_number}>{this.props.taiKhoan.sothethanhvien}</Text>
                            </View>
                            <View>
                                <Image
                                    style={styles.code}
                                    source={code}
                                ></Image>
                            </View>
                        </View>
                        <View style={styles.touch}>
                            <TouchableOpacity onPress={this._onPressThongTinTK}>
                                <View style={styles.touch_text} >
                                    <Text style={styles.text} >Thông tin tài khoản</Text>
                                    <View style={styles.backgroundIcon} >
                                        <MaterialIcons name="keyboard-arrow-right" size={22} color="#585858" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ThayDoiMatKhau')}>
                                <View style={styles.touch_text}>
                                    <Text style={styles.text}>Thay đổi mật khẩu</Text>
                                    <View style={styles.backgroundIcon} >
                                        <MaterialIcons name="keyboard-arrow-right" size={22} color="#585858" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DangNhap')}>
                            <View style={styles.btnDX}>
                                <Text style={styles.button_text}>Đăng xuất</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                {/* <ThongTinTaiKhoanComponent ref={"thongTinTKModal"} parentFlatList={this} >

                </ThongTinTaiKhoanComponent> */}
            </ScrollView>
        );
    }
}

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#e6eef2",
        width: width,
        height: height,
    },
    title: {
        flex: 2.5,
        flexDirection: "column",
        alignItems: 'center',
    },
    background: {
        width: width,
        height: height / 5,
        opacity: 0.8,
        borderBottomLeftRadius: width / 6,
        borderBottomRightRadius: width / 6,
        backgroundColor: '#0b5170',
    },
    member: {
        width: width / 1.05,
        height: height / 2.8,
        backgroundColor: "white",
        alignItems: "center",
        shadowOpacity: 0.5,
        margin: 10,
        borderRadius: 5,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: -35,
        borderColor: "white",
        borderWidth: 1,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        margin: 10,
        color: '#1C1C1C',
    },
    code: {
        width: width / 1.1,
        height: height / 9,
    },
    card: {
        flexDirection: "row",
        padding: 10,
    },
    card_text: {
        flex: 1,
        fontSize: 15,
        color: '#6E6E6E',
    },
    card_number: {
        fontSize: 18,
        color: '#6E6E6E',
    },
    content: {
        flex: 8,
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
        top: 150,
    },
    touch: {
        flexDirection: "column",
        alignSelf: "center",
        justifyContent: 'center',
    },
    touch_text: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        width: width / 1.05,
        height: height / 14,
        marginBottom: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        color: "#6E6E6E",
        paddingLeft: 15,
    },
    backgroundIcon: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#E6E6E6",
        opacity: 0.5,
    },
    btnDX: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: width / 1.05,
        height: height / 14,
        marginBottom: 10,
    },
    button_text: {
        fontSize: 16,
        paddingLeft: 15,
        color: "red",
    },
});
