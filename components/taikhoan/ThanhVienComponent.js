import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import Button from "react-native-button";

export default class TinBenLeComponent extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <ImageBackground
              style={styles.background}
              source={require("../image/imgthanhvien.jpg")}
            >
              <Text style={styles.title_text}>Thành viên BETA</Text>
            </ImageBackground>
            <View style={styles.member}>
              <Image
                style={styles.avatar}
                source={require("../image/imgthanhvien.jpg")}
              ></Image>
              <Text style={styles.name}>Trần Đức Soạn</Text>
              <View style={styles.card}>
                <Text style={styles.card_text}>Thẻ thành viên</Text>
                <Text style={styles.card_number}>9002000001061499</Text>
              </View>
              <Image
                style={styles.code}
                source={require("../image/imgthanhvien.jpg")}
              ></Image>
            </View>
          </View>
          <View style={styles.content}>
            <Text>Thông tin tài khoản</Text>
          </View>
          <View style={styles.button}>
            <Button>Đăng xuất</Button>
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
    flex: 6,
    flexDirection: "column",
  },
  background: {
    width: width,
    height: height / 3.5,
    flex: 4,
    opacity: 0.9,
  },
  title_text: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
    padding: 25,
    paddingTop: 5,
    paddingStart: 50,
  },
  member: {
    width: width,
    height: 260,
    backgroundColor: "white",
    alignItems: "center",
    flex: 6,
    borderWidth: 8,
    borderColor: "#e6eef2",
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
    fontSize: 20,
    fontWeight: "600",
  },
  code: {
    width: width / 1.3,
    height: height / 10,
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
    fontSize: 16,
  },
  content: {
    flex: 2,
  },
  button: {
    flex: 1,
    
  },
});
