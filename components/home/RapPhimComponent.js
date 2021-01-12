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

export default class RapPhimComponent extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.touch}>
                            <Text style={{fontSize: 18, color: '#6E6E6E', marginBottom: 20, marginTop: 10,}}>CHỌN RẠP THEO PHIM</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ThongTinTaiKhoan')}>
                                <View style={styles.touch_text} >
                                    <Text style={styles.text} >Hà Nội</Text>
                                    <View style={styles.backgroundIcon} >
                                        <MaterialIcons name="keyboard-arrow-right" size={22} color="#585858" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ThayDoiMatKhau')}>
                                <View style={styles.touch_text}>
                                    <Text style={styles.text}>TP. Hồ Chí Minh</Text>
                                    <View style={styles.backgroundIcon} >
                                        <MaterialIcons name="keyboard-arrow-right" size={22} color="#585858" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ThongTinTaiKhoan')}>
                                <View style={styles.touch_text} >
                                    <Text style={styles.text} >Bắc Giang</Text>
                                    <View style={styles.backgroundIcon} >
                                        <MaterialIcons name="keyboard-arrow-right" size={22} color="#585858" />
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ThayDoiMatKhau')}>
                                <View style={styles.touch_text}>
                                    <Text style={styles.text}>Đồng Nai</Text>
                                    <View style={styles.backgroundIcon} >
                                        <MaterialIcons name="keyboard-arrow-right" size={22} color="#585858" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
        marginTop: 20,
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
