import React, { Component } from 'react';
import {
  Text, View, Button, StyleSheet, Image, Dimensions, ScrollView, TouchableHighlight, FlatList, TouchableOpacity
} from 'react-native';

import ItemKhuyenMaiComponent from './itemkhuyenmai/ItemKhuyenMaiComponent';

import { urlNews, urlLocalhost } from '../../APILinks';

const listTinBenLe = [
  {
    anhTin: 'https://files.betacorp.vn/files/ecm/2020/12/22/3-180723-221220-68.png',
    tieuDe: 'Beta Cinemas Quang Trung - Khai trương đầu năm 2021',
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
    anhTin: 'https://files.betacorp.vn/files/ecm/2020/11/30/545x415-174329-301120-64.jpg',
    tieuDe: 'Beta Cinemas Giải Phóng - Khai trương 20/11/2020',
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
    anhTin: 'https://files.betacorp.vn/files/ecm/2020/10/29/the-croods-2-141047-291020-78.jpg',
    tieuDe: 'THE CROODS: A NEW AGE | 3 bom tấn hoạt hình không thể bỏ lỡ dịp cuối năm 2020',
  },
  {
    anhTin: 'https://files.betacorp.vn/files/ecm/2019/02/20/ngoc-trinh-dieu-nhi-la-thanh-v-3406-9822-1550405773-063747-200219-48.jpg',
    tieuDe: '[Review] Vu Quy Đại Náo - Trên Cả Sự Kỳ Vọng',
  },
  {
    anhTin: 'https://files.betacorp.vn/files/ecm/2019/03/09/screen-shot-2018-12-03-at-10-03-19-pm-055319-090319-70.png',
    tieuDe: 'Đại Úy Marvel - Choáng Ngợp Với Sức Mạnh Không Tưởng Và Cận Chiến Mãn Nhãn',
  },
  {
    anhTin: 'https://files.betacorp.vn/files/ecm/2019/03/26/us-lupita-nyongo-jpg-1552407636-151847-260319-21.jpg',
    tieuDe: 'Us - Những Kẻ Song Trùng Bí Ẩn, Cuồng Loạn',
  },
  {
    anhTin: 'https://files.betacorp.vn/files/ecm/2019/09/04/dsc08832-kpth-thumb-092102-040919-70.jpg',
    tieuDe: 'Anh Thầy Ngôi Sao - Ước Mơ Dang Dở Trở Thành Câu Chuyện Hài Duyên Dáng',
  },
]

export default class TinBenLeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: 0,
      allNews: [],
    }
  }

  componentDidMount() {
    this.getAllNews()
  }

  getAllNews = () => {
    console.log(urlLocalhost + urlNews)
    return fetch(urlLocalhost + urlNews, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);

        this.setState({ success: responseJson.success });
        if (this.state.success == 1) {

          this.setState({ allNews: responseJson.news });
          console.log('allNews ', this.state.allNews);
        }
        else {
          console.warn('responseJson', responseJson);
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
            this.state.allNews.map(item => {
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
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("ChiTietKhuyenMai", item)}
              >
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