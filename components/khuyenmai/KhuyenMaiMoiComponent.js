import React, { Component } from 'react';
import {
    Text, View, Button, StyleSheet, Image
} from 'react-native';
import giam10 from '../../images/giam10.jpg';
import donggia from '../../images/donggia.jpg';
import uudai from '../../images/uudai.jpg';
import tk10 from '../../images/tk10.jpg';
import caiapp from '../../images/caiapp.jpg';
import sale from '../../images/sale.jpg';



export default class KhuyenMaiMoiComponent extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.viewcontainer}>

                    <Image source={giam10} style={styles.image} />


                    <Text style={styles.text}>Đặt vé BETA CINEMAS-GIẢM NGAY 10% KHI THANH TOÁN QUA VÍ AIRPAY</Text>
                </View>

                <View style={styles.viewcontainer} >
                    <Image source={donggia} style={styles.image} />

                    <Text style={styles.text}>THÀNH VIÊN BETA - ĐỒNG GIÁ 45K/50K</Text>

                </View>

                <View style={styles.viewcontainer} >

                    <Image source={uudai} style={styles.image} />

                    <Text style={styles.text}>BETA TEN</Text>
                </View>

                <View style={styles.viewcontainer} >

                    <Image source={tk10} style={styles.image} />

                    <Text style={styles.text}>GIẢM THÊM 10K KHI MUA COMBO ONLINE</Text>
                </View>

                <View style={styles.viewcontainer} >

                    <Image source={caiapp} style={styles.image} />

                    <Text style={styles.text}>CÀI APP BETA NHẬN TIỀN BAO LA</Text>
                </View>

                <View style={styles.viewcontainer} >

                    <Image source={sale} style={styles.image} />

                    <Text style={styles.text}>SALE KHÔNG NGỪNG- MỪNG "MAD SALE DAY"</Text>
                </View>


            




                <Button style={styles.button} title="Chi tiết khuyến mại" onPress={() => this.props.navigation.navigate('ChiTietKhuyenMai')} />
            </View >
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
    
    viewcontainer: {
        flex: 98,
        backgroundColor: 'white',
        marginTop: 10,
    },
    button:{
        flex: 2,
    },
    image: {
        width: 95,
        height: 70,
        position: 'absolute',
        paddingRight: 12
    },

    text: {
        fontWeight: 'bold',
        paddingLeft: 95,
        paddingBottom: 20,
    },
})