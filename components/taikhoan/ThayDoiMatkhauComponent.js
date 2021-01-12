import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default class DoiMatKhauComponent extends Component {
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
          <View style={styles.content}>
            <Text style={styles.content_one}>Nhập mật khẩu hiện tại</Text>
            <View style={styles.list_item}>
              <MaterialIcons
                name="lock-outline"
                size={40}
                style={styles.input_icon}
              />
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Mật khẩu hiện tại"
                placeholderTextColor="#00000061"
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typePassWord: text,
                    };
                  });
                }}
              />
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.content_one}>Nhập mật khẩu mới</Text>
            <View style={styles.list_item}>
              <MaterialCommunityIcons
                name="lock-open-check"
                size={40}
                style={styles.input_icon}
              />
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Mật khẩu mới"
                placeholderTextColor="#00000061"
                keyboardType="default"
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typeNewPassWord: text,
                    };
                  });
                }}
              />
            </View>
            <View style={styles.list_item}>
              <MaterialCommunityIcons
                name="lock-check"
                size={40}
                style={styles.input_icon}
              />
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Nhập lại mật khẩu mới"
                keyboardType="default"
                placeholderTextColor="#00000061"
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typeNewPassWordAgain: text,
                    };
                  });
                }}
              />
            </View>
          </View>

          <View style={styles.list_tin}>
            <TouchableHighlight activeOpacity={0.5} underlayColor="#DDDDDD">
              <View>
                <Text style={styles.button}>cập nhật</Text>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: width,
    height: height,
    backgroundColor: "#e6eef2",
    alignItems: "center",
  },
  content: {
    flexDirection: "column",
  },
  content_one: {
    color: "#403b3b",
    fontSize: 18,
    paddingTop: 20,
    fontWeight: "500",
  },
  list_tin: {
    flexDirection: "column",
    alignSelf: "center",
  },
  list_item: {
    flexDirection: "row",
    marginTop: 15,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    width: width / 1.2,
    fontSize: 18,
    height: height / 14,
    borderRadius: 5,
    paddingLeft: 50,
  },
  input_icon: {
    position: "absolute",
    color: "gray",
    alignSelf: "center",
    borderRightWidth: 4,
  },
  button: {
    textAlign: "center",
    padding: 15,
    marginTop: 25,
    fontSize: 25,
    textTransform: "uppercase",
    color: "white",
    backgroundColor: "#db7623",
    width: width / 1.2,
    height: height / 12,
  },
});
