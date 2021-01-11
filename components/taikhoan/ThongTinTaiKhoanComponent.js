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

export default class ThongTinTaiKhoanComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeName: "",
      typeSex: "",
      typeBirthday: "",
      typeID: "",
      typePhone: "",
      typeCity: "",
      typeDistrict: "",
      typeAddress: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title_text}>Thông tin tài khoản</Text>
        </View>
        <ScrollView style={styles.content}>
          <Text style={styles.content_one}>THÔNG TIN CƠ BẢN</Text>
          <Text style={styles.content_one}>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Name"
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  typeName: text,
                };
              });
            }}
          ></TextInput>
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="Sex"
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  typeSex: text,
                };
              });
            }}
          ></TextInput>
          <TextInput
            style={styles.input}
            keyboardType="numbers-and-punctuation"
            placeholder="Birthday"
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  typeBirthday: text,
                };
              });
            }}
          ></TextInput>
          <Text style={styles.content_two}>THÔNG TIN LIÊN HỆ</Text>
          <TextInput
            style={styles.input}
            placeholder="ID"
            keyboardType="number-pad"
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  typeID: text,
                };
              });
            }}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            keyboardType="phone-pad"
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  typePhone: text,
                };
              });
            }}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="City"
            keyboardType="default"
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  typeCity: text,
                };
              });
            }}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="District"
            keyboardType="default"
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  typeDistrict: text,
                };
              });
            }}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Address"
            keyboardType="default"
            onChangeText={(text) => {
              this.setState((previousState) => {
                return {
                  typeAddress: text,
                };
              });
            }}
          ></TextInput>
          <TouchableHighlight>
            <View style={styles.list_tin}>
              <Text style={styles.button}>xác nhận</Text>
            </View>
          </TouchableHighlight>
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
    padding: 10,
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
    fontWeight: "500",
  },
  content_two: {
    color: "#74c8f2",
    paddingStart: 15,
    fontSize: 20,
    paddingTop: 25,
    fontWeight: "500",
  },
  list_tin: {
    flexDirection: "column",
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
    fontSize: 16,
  },
  button: {
    alignSelf: "center",
    padding: 15,
    marginTop: 25,
    fontSize: 25,
    textTransform: "uppercase",
    color: "white",
    backgroundColor: "#3252a8",
    width: width / 1.3,
    borderRadius: 6,
    marginBottom: 60,
  },
});
