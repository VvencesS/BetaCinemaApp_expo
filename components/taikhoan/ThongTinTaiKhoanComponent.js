import React, { Component } from 'react';
import {
    Text, View, CheckBox, TextInput, StyleSheet, Button, Dimensions, TouchableOpacity, Picker, ScrollView, TouchableHighlight, Alert
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Modal from 'react-native-modalbox';

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const { width: WIDTH } = Dimensions.get('window')

export default class ThongTinTaiKhoanComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
        }
    }

    showAddModal = () => {
        this.refs.thongTinTKModal.open();
    } 

    render() {

        return (
            // <Modal
            //     ref={"thongTinTKModal"}
            //     style={{
            //         justifyContent: 'center', borderRadius: 5, shadowRadius: 10,
            //         width: screen.width - 10, height: 280
            //     }}
            //     position='center'
            //     backdrop={true}
            // >
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.view}>
                            <Text style={styles.title}>THÔNG TIN CƠ BẢN</Text>
                        </View>
                        <View style={styles.view1}>
                            <View style={{ flexDirection: 'row', marginLeft: 27, marginTop: 15 }}>
                                <Text style={{ fontSize: 16, color: "#585858" }}>EMAIL</Text>
                                <Text style={{ width: 20, }}></Text>
                                <Text style={{ fontSize: 16, color: "#585858" }}>DucSoan99@gmail.com</Text>
                            </View>
                            <View style={styles.imputContainer}>
                                <View style={{ flex: 1, borderRightColor: '#A8A1A1', borderRightWidth: 1 }}>
                                    <FontAwesome5 name="user-circle" size={22} color="#A8A1A1" style={styles.imputIcon} />
                                </View>
                                <TextInput style={styles.textinput}
                                    value='Trần Đức Soạn'
                                    placeholder='Họ Tên'
                                    placeholderTextColor='#00000061'
                                    underlineColorAndroid='transparent' />
                            </View>
                            <View style={styles.imputContainer}>
                                <FontAwesome name="transgender" size={22} color="#A8A1A1" style={styles.imputIcon} />
                                <TextInput style={styles.textinput}
                                    value='Nam'
                                    placeholder='Giới tính'
                                    placeholderTextColor='#00000061'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.imputContainer}>
                                <MaterialIcons name="cake" size={22} color="#A8A1A1" style={styles.imputIcon} />
                                <TextInput style={styles.textinput}
                                    value='11-10-1999'
                                    placeholder='Ngày sinh'
                                    placeholderTextColor='#00000061'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </View>

                        <View style={styles.view}>
                            <Text style={styles.title}>THÔNG TIN LIÊN HỆ</Text>
                        </View>
                        <View style={styles.view2}>
                            <View style={styles.imputContainer} >
                                <AntDesign name="idcard" size={22} color="#A8A1A1" style={styles.imputIcon} />
                                <TextInput style={styles.textinput}
                                    value='036099007701'
                                    placeholder='Thẻ căn cước/CMT'
                                    placeholderTextColor='#00000061'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.imputContainer}>
                                <SimpleLineIcons name="screen-smartphone" size={22} color="#A8A1A1" style={styles.imputIcon} />
                                <TextInput style={styles.textinput}
                                    value='0335715608'
                                    placeholder='Số Điện Thoại'
                                    placeholderTextColor='#00000061'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.imputContainer} >
                                <MaterialCommunityIcons name="city-variant-outline" size={22} color="#A8A1A1" style={styles.imputIcon} />
                                <TextInput style={styles.textinput}
                                    value='Nam Định'
                                    placeholder='Tỉnh/Thành phố'
                                    placeholderTextColor='#00000061'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.imputContainer}>
                                <MaterialCommunityIcons name="home-outline" size={22} color="#A8A1A1" style={styles.imputIcon} />
                                <TextInput style={styles.textinput}
                                    value='Giao Thủy'
                                    placeholder='Quận/Huyện'
                                    placeholderTextColor='#00000061'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.imputContainer}>
                                <Octicons name="location" size={22} color="#A8A1A1" style={styles.imputIcon} />
                                <TextInput style={styles.textinput}
                                    value='Giao Thiện'
                                    placeholder='Địa chỉ'
                                    placeholderTextColor='#00000061'
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.btnDN}
                            onPress={() => this.props.navigation.navigate('DangNhap')}
                        >
                            <LinearGradient
                                colors={['#0a64a7', '#258dcf', '#3db1f3']}
                                start={[0, 0]}
                                end={[1, 1]}
                                location={[0.5, 0.15, 1]}
                                style={styles.buttonDN}
                            >
                                <Text style={styles.text}>CẬP NHẬT</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            // </Modal>
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
        backgroundColor: '#FAFAFA',
    },
    view: {
        flex: 1.5,
        marginTop: 20,
    },
    view1: {
        flex: 80,
    },
    imputContainer: {
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5F5F65',
        marginLeft: 27,
        marginTop: 10,
        marginBottom: 10
    },
    view2: {
        flex: 17,
    },
    textinput: {
        width: WIDTH - 55,
        height: 50,
        marginLeft: 27,
        paddingLeft: 50,
        borderColor: '#A8A1A1',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        color: "#585858",
    },

    imputIcon: {
        position: 'absolute',
        marginTop: 14,
        left: 40,
        borderRightColor: '#A8A1A1',
        borderRightWidth: 1,
        paddingRight: 10
    },
    checkboxContainer: {
        flexDirection: "row",
        margin: 20
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        width: 315,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5
    },
    colorLink: {
        color: "#0a64a7",
        marginLeft: 2,
        marginRight: 2,
        fontSize: 16,
    },
    /*Style button Đăng ký*/
    btnDN: {
        width: WIDTH - 55,
        height: 50,
        justifyContent: 'center',
        borderColor: '#A8A1A1',
        borderWidth: 1,
        marginTop: 20,
        marginBottom: 20,
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
