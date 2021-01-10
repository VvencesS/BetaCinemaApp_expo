import React, { Component } from 'react';
import {
    Text, View, Image, StyleSheet, TouchableOpacity
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


import { DangNhapScreen, DangXuatScreen } from '../../screenNames';



export default class VoucherComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view}>
                    <Text style={styles.text}>BẠN KHÔNG CÓ VOUCHER NÀO !</Text>
                    </View>
                    <View style={styles.view1}>
                        <Text>Bạn có thể tìm kiếm voucher miễn phí hoặc thêm mới
                        </Text>
                    </View>
                    <View style={styles.view}>
                    <Text> voucher của bạn!</Text>
                    </View>
                    
                <TouchableOpacity style={styles.btnVC} >
            <LinearGradient
              colors={['#0b5170', '#16729a', '#67bbe0']}
              start={[0, 0]}
              end={[1, 1]}
              location={[0.5, 0.15, 1]}
              style={styles.buttonVC}
            >
              <Text style={styles.text1}>VOUCHER MIỄN PHÍ</Text>
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
    view:{
        alignItems: 'center',
    },
    view1:{
        paddingLeft: 40,
    },
    text:{
        color:'#00BFFF',   
        fontSize: 17,
    },
    btnVC:{
    width: 300,
    height: 50,
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginLeft:20,
    left: 40,
    borderRadius: 5,
    },
    buttonVC:{
        width:300,
        height:50,
        borderRadius: 5,
    },
    text1:{
        textAlign: 'center',
        color:'white',
        paddingTop: 15,
    },
    
})
