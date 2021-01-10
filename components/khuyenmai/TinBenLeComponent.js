import React, { Component } from 'react';
import {
    Text, View, Button, StyleSheet, Image
} from 'react-native';
import qtrung from '../../images/qtrung.png';
import ho from '../../images/ho.jpg';
import GP from '../../images/GP.jpg';
import thaygiao from '../../images/thaygiao.jpg';
import us from '../../images/us.jpg';
import daiuy from '../../images/daiuy.png';



export default class KhuyenMaiMoiComponent extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.viewcontainer}>

                    <Image source={qtrung} style={styles.image} />


                    <Text style={styles.text}>Beta Cinemas Quang Trung - Khai Trương đầu năm 2021</Text>
                </View>

                <View style={styles.viewcontainer} >
                    <Image source={ho} style={styles.image} />

                    <Text style={styles.text}>THE CROODS: A NEW AGE| 3 bom tấn hoạt hình không thể bỏ lỡ dịp cuối năm 2020</Text>

                </View>

                <View style={styles.viewcontainer} >

                    <Image source={GP} style={styles.image} />

                    <Text style={styles.text}>Beta Cinemas Giải Phóng - Khai Trương 20/11/2020</Text>
                </View>

                <View style={styles.viewcontainer} >

                    <Image source={thaygiao} style={styles.image} />

                    <Text style={styles.text}>Anh Thầy Ngôi Sao-Ưowsc Mơ Dang Dở Trở Thành Câu Chuyện Hài Duyên Dáng</Text>
                </View>

                <View style={styles.viewcontainer} >

                    <Image source={us} style={styles.image} />

                    <Text style={styles.text}>Us - Những Kẻ Song Trùng Bí Ẩn Cuồng Loạn </Text>
                </View>

                <View style={styles.viewcontainer} >

                    <Image source={daiuy} style={styles.image} />

                    <Text style={styles.text}>Đại Úy Marvel - Choáng Ngợp Với Sức Mạnh Không Tưởng Và Cận Chiến Mãn Nhãn</Text>
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