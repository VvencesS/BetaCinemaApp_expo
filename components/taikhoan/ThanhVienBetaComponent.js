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

export default class ThanhVienBetaComponent extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <ImageBackground
              style={styles.background}
              source={require("../../images/imgthanhvien.jpg")}
            ></ImageBackground>
          </View>
          <View style={styles.content}>
            <View style={styles.member}>
              <View>
                <Image
                  style={styles.avatar}
                  source={require("../../images/imgthanhvien.jpg")}
                ></Image>
              </View>
              <View>
                <Text style={styles.name}>Khổng Ngọc Ánh</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.card_text}>Thẻ thành viên</Text>
                <Text style={styles.card_number}>9002000001061499</Text>
              </View>
              <View>
                <Image
                  style={styles.code}
                  source={require("../../images/code.jpg")}
                ></Image>
              </View>
            </View>
            <View style={styles.touch}>
              <TouchableHighlight onPress={()=>this.props.navigation.navigate('Home')}>
                <View>
                  <Text style={styles.touch_text} >Thông tin tài khoản</Text>
                </View>
              </TouchableHighlight>
              <Text></Text>
              <TouchableHighlight onPress={()=>this.props.navigation.navigate('ThayDoiMatKhau')}>
                <View>
                  <Text style={styles.touch_text}>Thay đổi mật khẩu</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.button}>
            <TouchableHighlight onPress={this.onPress}>
              <View>
                <Text style={styles.button_text}>Đăng Xuất</Text>
              </View>
            </TouchableHighlight>
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
  },
  background: {
    width: width,
    height: height / 3.5,
    opacity: 0.9,
  },
  member: {
    width: width / 1.05,
    height: height / 2.8,
    backgroundColor: "white",
    alignItems: "center",
    shadowOpacity: 0.5,
    margin: 10,
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
    fontSize: 24,
    fontWeight: "600",
    margin: 10,
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
    fontSize: 16,
  },
  card_number: {
    fontSize: 17,
  },
  content: {
    flex: 8,
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    top: 150,
  },
  touch: {
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  touch_text: {
    fontSize: 20,
    backgroundColor: "white",
    width: width,
    height: height / 10,
    paddingTop: 20,
    paddingStart: 10,
  },
  button: {
    flex: 0.3,
    alignItems: "flex-start",
    margin: 10,
  },
  button_text: {
    fontSize: 20,
    color: "red",
  },
});
