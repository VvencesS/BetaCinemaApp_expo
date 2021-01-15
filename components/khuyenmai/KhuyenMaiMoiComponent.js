import React, { Component } from 'react';
import {
    Text, View, Button, StyleSheet, Image, Dimensions, ScrollView, TouchableHighlight, FlatList, TouchableOpacity
} from 'react-native';

import ItemKhuyenMaiComponent from './itemkhuyenmai/ItemKhuyenMaiComponent';

import {urlOffers, urlLocalhost} from '../../APILinks';

const listTinBenLe = [
    {
        anhTin: 'https://files.betacorp.vn/files/ecm/2021/01/11/545x415-student-combo-171511-110121-29.jpg',
        tieuDe: 'STUDENT COMBO 1 VÉ + 1 BẮP 59K',
        noiDung: 'Chính thức mở cửa 20/11/2020, rạp Beta Cinemas Giải Phóng tọa lạc tại Tầng 3, tòa IP2, Chung cư Imperial Plaza, 360 Giải Phóng, phường Phương Liệt, quận Thanh Xuân, Hà Nội là điểm đến lý tưởng của giới "mộ - chill" Hà Thành. ' +
            'Rạp có vị trí thuận lợi, gần khu vực sinh sống đông dân cư cũng như trung tâm thương mại đầy đủ tiện nghi. Beta Cinemas Giải Phóng sở hữu tổng cộng 6 phòng chiếu tương đương gần 700 ghế ngồi. Rạp được trang bị hệ thống màn chiếu, máy chiếu, ' +
            'phòng chiếu hiện đại theo tiêu chuẩn Hollywood với 100% nhập khẩu từ nước ngoài. Trong mỗi phòng chiếu đều được lắp đặt hệ thống âm thanh Dolby 7.1 và hệ thống cách âm chuẩn quốc tế. Vì vậy mà mỗi thước phim được chiếu tại rạp đều là những thước phim rõ nét nhất, với âm thanh và hiệu ứng sống động nhất. Mức giá xem phim tại rạp hết sức ưu đãi, chỉ từ 50.000 VNĐ. ' +
            'Mức giá xem phim tại rạp hết sức ưu đãi, chỉ từ 45.000 VNĐ. Mỗi tuần, rạp còn có những chương trình khuyến mại, ưu đãi đặc biệt dành cho các tín đồ điện ảnh, như Đồng giá vé 50k cho học sinh sinh viên bất kể giờ giấc năm tháng, đồng giá vé 50k từ thứ 2 đến thứ 6 cho mọi người mọi nhà, giảm thêm 10k khi mua vé kèm combo online. ' +
            'Với địa điểm thuận lợi, cơ sở vật chất hiện đại, tiên tiến, mức giá ưu đãi, Beta Cinemas Giải Phóng chắc chắn sẽ là địa điểm xem-ăn-chơi không thể bỏ qua của giới trẻ Hà Thành. ' +
            'Thông tin liên hệ Rạp Beta Cinemas Giải Phóng: ' +
            'Địa chỉ: Tầng 3, tòa IP2, Chung cư Imperial Plaza, 360 Giải Phóng, phường Phương Liệt, quận Thanh Xuân, Hà Nội. ' +
            'Điện thoại: 0585 680 360'
    },
    {
        anhTin: 'https://files.betacorp.vn/files/ecm/2020/12/31/545x415-airrpay-182936-311220-31.jpg',
        tieuDe: 'ĐẶT VÉ BETA CINEMAS - GIẢM NGAY 10% KHI THANH TOÁN QUA VÍ AIRPAY',
        noiDung: 'Chính thức mở cửa 20/11/2020, rạp Beta Cinemas Giải Phóng tọa lạc tại Tầng 3, tòa IP2, Chung cư Imperial Plaza, 360 Giải Phóng, phường Phương Liệt, quận Thanh Xuân, Hà Nội là điểm đến lý tưởng của giới "mộ - chill" Hà Thành. ' +
            'Rạp có vị trí thuận lợi, gần khu vực sinh sống đông dân cư cũng như trung tâm thương mại đầy đủ tiện nghi. Beta Cinemas Giải Phóng sở hữu tổng cộng 6 phòng chiếu tương đương gần 700 ghế ngồi. Rạp được trang bị hệ thống màn chiếu, máy chiếu, ' +
            'phòng chiếu hiện đại theo tiêu chuẩn Hollywood với 100% nhập khẩu từ nước ngoài. Trong mỗi phòng chiếu đều được lắp đặt hệ thống âm thanh Dolby 7.1 và hệ thống cách âm chuẩn quốc tế. Vì vậy mà mỗi thước phim được chiếu tại rạp đều là những thước phim rõ nét nhất, với âm thanh và hiệu ứng sống động nhất. Mức giá xem phim tại rạp hết sức ưu đãi, chỉ từ 50.000 VNĐ. ' +
            'Mức giá xem phim tại rạp hết sức ưu đãi, chỉ từ 45.000 VNĐ. Mỗi tuần, rạp còn có những chương trình khuyến mại, ưu đãi đặc biệt dành cho các tín đồ điện ảnh, như Đồng giá vé 50k cho học sinh sinh viên bất kể giờ giấc năm tháng, đồng giá vé 50k từ thứ 2 đến thứ 6 cho mọi người mọi nhà, giảm thêm 10k khi mua vé kèm combo online. ' +
            'Với địa điểm thuận lợi, cơ sở vật chất hiện đại, tiên tiến, mức giá ưu đãi, Beta Cinemas Giải Phóng chắc chắn sẽ là địa điểm xem-ăn-chơi không thể bỏ qua của giới trẻ Hà Thành. ' +
            'Thông tin liên hệ Rạp Beta Cinemas Giải Phóng: ' +
            'Địa chỉ: Tầng 3, tòa IP2, Chung cư Imperial Plaza, 360 Giải Phóng, phường Phương Liệt, quận Thanh Xuân, Hà Nội. ' +
            'Điện thoại: 0585 680 360'
    },
    {
        anhTin: 'https://files.betacorp.vn/files/ecm/2020/03/03/545x415-094529-030320-73.jpg',
        tieuDe: 'THÀNH VIÊN BETA - ĐỒNG GIÁ 45K/50K',
    },
    {
        anhTin: 'https://files.betacorp.vn/files/ecm/2021/01/05/545x415-thu-3-vui-ve-112234-050121-84.jpg',
        tieuDe: 'THỨ BA VUI VẺ',
        noiDung: 'Chính thức mở cửa 20/11/2020, rạp Beta Cinemas Giải Phóng tọa lạc tại Tầng 3, tòa IP2, Chung cư Imperial Plaza, 360 Giải Phóng, phường Phương Liệt, quận Thanh Xuân, Hà Nội là điểm đến lý tưởng của giới "mộ - chill" Hà Thành. ' +
            + 'Rạp có vị trí thuận lợi, gần khu vực sinh sống đông dân cư cũng như trung tâm thương mại đầy đủ tiện nghi. Beta Cinemas Giải Phóng sở hữu tổng cộng 6 phòng chiếu tương đương gần 700 ghế ngồi. Rạp được trang bị hệ thống màn chiếu, máy chiếu, ' +
            + 'phòng chiếu hiện đại theo tiêu chuẩn Hollywood với 100% nhập khẩu từ nước ngoài. Trong mỗi phòng chiếu đều được lắp đặt hệ thống âm thanh Dolby 7.1 và hệ thống cách âm chuẩn quốc tế. Vì vậy mà mỗi thước phim được chiếu tại rạp đều là những thước phim rõ nét nhất, với âm thanh và hiệu ứng sống động nhất. Mức giá xem phim tại rạp hết sức ưu đãi, chỉ từ 50.000 VNĐ. ' +
            + 'Mức giá xem phim tại rạp hết sức ưu đãi, chỉ từ 45.000 VNĐ. Mỗi tuần, rạp còn có những chương trình khuyến mại, ưu đãi đặc biệt dành cho các tín đồ điện ảnh, như Đồng giá vé 50k cho học sinh sinh viên bất kể giờ giấc năm tháng, đồng giá vé 50k từ thứ 2 đến thứ 6 cho mọi người mọi nhà, giảm thêm 10k khi mua vé kèm combo online. ' +
            + 'Với địa điểm thuận lợi, cơ sở vật chất hiện đại, tiên tiến, mức giá ưu đãi, Beta Cinemas Giải Phóng chắc chắn sẽ là địa điểm xem-ăn-chơi không thể bỏ qua của giới trẻ Hà Thành. ' +
            + 'Thông tin liên hệ Rạp Beta Cinemas Giải Phóng: ' +
            + 'Địa chỉ: Tầng 3, tòa IP2, Chung cư Imperial Plaza, 360 Giải Phóng, phường Phương Liệt, quận Thanh Xuân, Hà Nội. ' +
            + 'Điện thoại: 0585 680 360'
    },
    {
        anhTin: 'https://files.betacorp.vn/files/ecm/2021/01/05/545x415-hop-den-112756-050121-21.jpg',
        tieuDe: 'SALE KHÔNG NGỪNG - MỪNG "MAD SALE DAY"',
    },
    {
        anhTin: 'https://files.betacorp.vn/files/ecm/2020/05/30/101294853-300775437613751-1532878732795052032-n-134520-300520-40.jpg',
        tieuDe: 'GIÁ VÉ ƯU ĐÃI CHO HỌC SINH, SINH VIÊN',
    },
    {
        anhTin: 'https://files.betacorp.vn/files/ecm/2020/05/30/101388469-951811315255869-5862490390350790656-n-134624-300520-77.jpg',
        tieuDe: 'BETA TEN',
    },
]

export default class KhuyenMaiMoiComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: 0,
            allOffers: [],
        }
    }

    componentDidMount() {
        this.getAllOffers()
    }

    getAllOffers = () => {
        console.log(urlLocalhost + urlOffers)
        return fetch(urlLocalhost + urlOffers, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                this.setState({ success: responseJson.success });
                if (this.state.success == 1) {

                    this.setState({ allOffers: responseJson.offers });
                    console.log('allOffers ', this.state.allOffers);
                }
                else {
                    console.warn('responseJson', responseJson);
                    Alert.alert("Thông báo!", responseJson.message);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list_tin}
                    data={
                        this.state.allOffers.map(item => {
                            return {
                                _id: item._id,
                                loaitmvakm: item.loaitmvakm,
                                tentmvakm: item.tentmvakm,
                                noidunng: item.noidunng,
                                anhtmvakm: urlLocalhost + item.anhtmvakm,
                            }
                        })
                    }
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("ChiTietKhuyenMai", item)} >
                                <ItemKhuyenMaiComponent item={item} index={index} parentFlatList={this} />
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item, index) => item.tieuDe}
                />
            </View>
        );
    }
}

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#e6eef2",
    },
    list_tin: {
        flexDirection: "column",
    },
});