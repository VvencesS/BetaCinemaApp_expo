import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
} from "react-native";

export default class TinBenLeComponent extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <ImageBackground
              style={styles.background}
              source={require("../../images/image.jpg")}
            >
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Trailer')}>
                    <Image source={require('../../images/play.png')}
                    style={styles.button_play}
                    ></Image>
                </TouchableHighlight>
            </ImageBackground>
            <View style={styles.poster}>
              <Image
                style={styles.poster_image}
                source={require("../../images/image.jpg")}
              ></Image>
              <Text style={styles.poster_text}>
                Chị Mười Ba: 3 ngày sinh tử
              </Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.content_one}>
              <Text style={styles.content_one_text}>ĐẠO DIỄN</Text>
              <Text style={styles.content_one_text}>DIỄN VIÊN</Text>
              <Text style={styles.content_one_text}>THỂ LOẠI</Text>
              <Text style={styles.content_one_text}>THỜI LƯỢNG</Text>
              <Text style={styles.content_one_text}>NGÔN NGỮ</Text>
              <Text style={styles.content_one_text}>NGÀY KHỞI CHIẾU</Text>
            </View>
            <View style={styles.content_two}>
              <Text style={styles.content_two_text}>Võ Thanh Hòa</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                style={styles.content_two_text}
              >
                Thu Trang, Tiến Luật, Kiều Minh Tuấn
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                style={styles.content_two_text}
              >
                Hành động, Hài hước
              </Text>
              <Text style={styles.content_two_text}>97 phút</Text>
              <Text style={styles.content_two_text}>Tiếng Việt</Text>
              <Text style={styles.content_two_text}>25/12/2020</Text>
            </View>
          </View>
          <View style={styles.summary}>
            <Text style={styles.summary_text}>
              “Chị Mười Ba” ban đầu là một web drama được trình chiếu trên
              Youtube. Sau khi kết thúc, loạt phim đã đạt được thành công cực kì
              lớn, đồng thời mở ra cả một vũ trụ phim “giang hồ” .Đến phiên bản
              điện ảnh, “Chị Mười Ba” khi được đưa lên màn ảnh rộng đã có
              650.000 vé được bán ra và thu về đến 62 tỷ đồng trong suốt thời
              gian phim chiếu.
            </Text>
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
    marginTop: 16,
    backgroundColor: "#e6eef2",
    width: width,
    height: height,
  },
  title: {
    flex: 3.8,
  },
  background: {
    width: width,
    height: height / 3,
    flex: 1,
    opacity: 0.8,
  },
  poster: {
    flexDirection: "row",
  },
  poster_image: {
    width: width / 4,
    height: height / 5,
    marginStart: 15,
    flex: 2,
    borderRadius: 6,
  },
  poster_text: {
    fontSize: 20,
    color: "#4c5c50",
    fontWeight: "bold",
    flex: 6,
    paddingTop: 75,
    padding: 15,
  },
  content: {
    flexDirection: "row",
    flex: 2,
    padding: 5,
  },
  content_one: {
    flex: 1.4,
  },
  content_one_text: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
    paddingStart: 10,
  },
  content_two: {
    flex: 2,
  },
  content_two_text: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
    paddingStart: 15,
  },
  summary: {
    fontSize: 16,
    flex: 2.6,
    padding: 10,
  },
  summary_text: {
    fontSize: 16,
  },
  button_play:{
      width:100,
      height:100,
  }
});

 