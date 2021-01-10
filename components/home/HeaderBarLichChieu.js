import React, { Component }from 'react';
import { View, Image, StyleSheet, Text, Button, Pressable, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import logo from '../../images/logo.png';
import avatar from '../../images/avatar.png';

import DangNhapComponent from '../DangNhapComponent';

const styles = StyleSheet.create({
    tinyLogo: {
        width: 90,
        height: 48,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    textBold: { fontWeight: 'bold' },
    title: {
        fontSize: 17,
        color: '#000',
    },
});

export default class HeaderBarLichChieu extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        // const { navigate } = this.state;
        return (
            <View style={{ flex: 1, flexDirection: 'row', }}>
                <View style={{ flex: 1, }} >
                    <Pressable
                        //onPress={() => this.props.navigation.navigate(DangNhap)}
                        style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                        {/* Khi đã đăng nhập */}
                        <View style={{ marginRight: 10 }}>
                            <Image source={avatar} style={styles.avatar} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={styles.title}>
                                Chào <Text style={styles.textBold}>Trần Đức Soạn</Text>
                            </Text>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <AntDesign name="user" size={18} color="#337ab7" style={{ marginRight: 3 }}/>
                                <Text style={{ fontSize: 12, color: 'gray' }}>MEMBER</Text>
                            </View>
                        </View>
    
                        {/* Khi chưa đăng nhập */}
                        {/* <View
                            style={{
                                flex: 1, flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#3db1f3',
                                    marginLeft: 10,
                                    padding: 5,
                                    borderColor: '#3db1f3',
                                    borderRightWidth: 1,
                                    borderLeftWidth: 1,
                                    borderBottomWidth: 1,
                                    borderTopWidth: 1,
                                    borderRadius: 5
                                    
                                }}
                            >
                                <FontAwesome5 name="user-circle" size={16} color="#3db1f3" />  Đăng nhập
                            </Text>
                        </View> */}
                    </Pressable>
                </View>
                <View>
                    <Image source={logo} style={styles.tinyLogo} />
                </View>
            </View>
        );
    }
}