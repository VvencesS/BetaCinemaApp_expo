import React, { Component } from "react";
import {
    Text, View, Image, TextInput, StyleSheet, Button, Dimensions, TouchableOpacity, Alert, ScrollView
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const { width: WIDTH } = Dimensions.get('window')

export default class ThayDoiMatKhauComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typePassWord: "",
            typeNewPassWord: "",
            typeNewPassWordAgain: "",
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.view2}>
                        <Text style={styles.title}>Nhập mật khẩu hiện tại</Text>

                        <View style={styles.inputContainer}>
                            <View style={{ flex: 1, borderRightColor: '#A8A1A1', borderRightWidth: 1 }}>
                                <MaterialIcons name="lock-outline" size={22} color="#A8A1A1" style={styles.inputIcon} />
                            </View>
                            <TextInput style={styles.textinput}
                                placeholder='Mật khẩu hiện tại'
                                placeholderTextColor='#00000061'
                                underlineColorAndroid='transparent' />
                        </View>

                        <Text style={styles.title}>Nhập mật khẩu mới</Text>

                        <View style={styles.inputContainer}>
                            <MaterialIcons name="lock-outline" size={22} color="#A8A1A1" style={styles.inputIcon} />
                            <TextInput style={styles.textinput}
                                placeholder='Mật Khẩu mới'
                                placeholderTextColor='#00000061'
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <MaterialCommunityIcons name="lock-check" size={22} color="#A8A1A1" style={styles.inputIcon} />
                            <TextInput style={styles.textinput}
                                placeholder='Nhập lại mật Khẩu mới'
                                placeholderTextColor='#00000061'
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <TouchableOpacity style={styles.btnDN} onPress={() => this.props.navigation.navigate('Home')}>
                            <LinearGradient
                                colors={['#fc3606', '#f44a19', '#fc7704']}
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
            </View >
        );
    }
}

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    view2: {
        flex: 50,
    },
    view3: {
        flex: 35,
    },
    title: {
        width: WIDTH - 55,
        marginLeft: 27,
        marginTop: 25,
        marginBottom: 5,
        color: "#424242",
    },
    inputContainer: {
        marginTop: 10,
    },
    textinput: {
        width: WIDTH - 55,
        height: 50,
        marginLeft: 27,
        paddingLeft: 50,
        borderColor: '#A8A1A1',
        borderWidth: 1,
        borderRadius: 5
    },

    inputIcon: {
        position: 'absolute',
        marginTop: 14,
        left: 40,
        borderRightColor: '#A8A1A1',
        borderRightWidth: 1,
        paddingRight: 10
    },
    text2: {
        paddingLeft: 25,
        marginTop: 15,
        color: 'skyblue',
        textDecorationLine: 'underline',
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
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
      },
});
