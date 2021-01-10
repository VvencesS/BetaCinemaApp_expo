import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Alert,
} from "react-native";
import Button from "react-native-button";
import { ScrollView } from "react-native-gesture-handler";

export default class DoiMatKhauComponent extends Component {
  _onPress = () => {
    Alert.alert("success");
  };

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
        <View style={styles.title}>
          <Text style={styles.title_text}>Thay đổi mật khẩu</Text>
        </View>
        <ScrollView style={styles.content}>
          <Text style={styles.content_one}>Nhập mật khẩu hiện tại</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Mật khẩu hiện tại"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  typePassWord: text,
                };
              });
            }}
          ></TextInput>
          <Text style={styles.content_one}>Nhập mật khẩu mới</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Mật khẩu mới"
            keyboardType="default"
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  typeNewPassWord: text,
                };
              });
            }}
          ></TextInput>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Nhập lại mật khẩu mới"
            keyboardType="default"
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  typeNewPassWordAgain: text,
                };
              });
            }}
          ></TextInput>
          <View style={styles.list_tin}>
          <Button style={styles.button} onPress={this._onPress}>
            xác nhận
          </Button>
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
    marginTop: 16,
    width: "100%",
    height: "100%",
    backgroundColor: "#e6eef2",
  },
  title: {
    backgroundColor: "#357cd4",
  },
  title_text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    padding: 15,
    paddingStart: 20,
  },
  content: {
    flexDirection: "column",
  },
  content_one: {
    color: "#74c8f2",
    paddingStart: 15,
    fontSize: 20,
    paddingTop: 25,
  },
  list_tin: {
    flexDirection: "column",
    flex: 6,
  },
  list_item: {
    flexDirection: "row",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: width / 1.3,
    padding: 10,
    marginTop: 10,
    marginStart: 15,
    fontSize:16,
  },
  button: {
    alignSelf: "center",
    padding: 15,
    marginTop: 25,
    fontSize: 25,
    textTransform: "uppercase",
    color: "white",
    backgroundColor: "#db7623",
    width: width / 1.3,
    borderRadius: 6,
  },
});
