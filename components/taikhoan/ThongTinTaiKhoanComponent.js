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
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.content_one}>THÔNG TIN CƠ BẢN</Text>
            <Text style={styles.content_one}>Email</Text>
            <View style={styles.list_item}>
              <FontAwesome5
                name="user-circle"
                size={30}
                style={styles.input_icon}
              />
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="Name"
                placeholderTextColor="#00000061"
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typeName: text,
                    };
                  });
                }}
              />
            </View>
            <View style={styles.list_item}>
              <FontAwesome5
                name="transgender"
                size={30}
                style={styles.input_icon}
              />
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="Sex"
                placeholderTextColor="#00000061"
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typeSex: text,
                    };
                  });
                }}
              ></TextInput>
            </View>
            <View style={styles.list_item}>
              <FontAwesome5
                name="birthday-cake"
                size={30}
                style={styles.input_icon}
              />
              <TextInput
                style={styles.input}
                keyboardType="numbers-and-punctuation"
                placeholder="Birthday"
                placeholderTextColor="#00000061"
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typeBirthday: text,
                    };
                  });
                }}
              ></TextInput>
            </View>
          </View>
          <View style={styles.content_one}>
            <Text style={styles.content_one}>THÔNG TIN LIÊN HỆ</Text>
            <View style={styles.list_item}>
              <FontAwesome5
                name="address-card"
                size={30}
                style={styles.input_icon}
              />
              <TextInput
                style={styles.input}
                placeholder="ID"
                keyboardType="number-pad"
                placeholderTextColor="#00000061"
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typeID: text,
                    };
                  });
                }}
              ></TextInput>
            </View>
            <View style={styles.list_item}>
              <FontAwesome5 name="phone" size={28} style={styles.input_icon} />
              <TextInput
                style={styles.input}
                placeholder="Phone"
                keyboardType="phone-pad"
                placeholderTextColor="#00000061"
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typePhone: text,
                    };
                  });
                }}
              ></TextInput>
            </View>
            <View style={styles.list_item}>
              <FontAwesome5 name="city" size={25} style={styles.input_icon} />
              <TextInput
                style={styles.input}
                placeholder="City"
                keyboardType="default"
                placeholderTextColor="#00000061"
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typeCity: text,
                    };
                  });
                }}
              ></TextInput>
            </View>
            <View style={styles.list_item}>
              <MaterialCommunityIcons
                name="billboard"
                size={30}
                style={styles.input_icon}
              />
              <TextInput
                style={styles.input}
                placeholder="District"
                keyboardType="default"
                placeholderTextColor="#00000061"
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typeDistrict: text,
                    };
                  });
                }}
              ></TextInput>
            </View>
            <View style={styles.list_item}>
              <MaterialCommunityIcons
                name="bank"
                size={30}
                style={styles.input_icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Address"
                keyboardType="default"
                placeholderTextColor="#00000061"
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                  this.setState((previousState) => {
                    return {
                      typeAddress: text,
                    };
                  });
                }}
              ></TextInput>
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
  content_two: {
    color: "#74c8f2",
    paddingStart: 15,
    fontSize: 20,
    paddingTop: 25,
    fontWeight: "500",
  },
  list_tin: {
    alignSelf: "center",
    marginBottom: 40,
    flexDirection: "column",
  },
  list_item: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    width: width / 1.2,
    height: height / 14,
    fontSize: 18,
    borderRadius: 5,
    paddingLeft: 50,
  },
  input_icon: {
    position: "absolute",
    color: "gray",
    borderRightWidth: 1,
    borderRightColor: "gray",
    left: 5,
    opacity: 0.5,
  },
  button: {
    textAlign: "center",
    padding: 15,
    marginTop: 25,
    fontSize: 25,
    textTransform: "uppercase",
    color: "white",
    backgroundColor: "#51a6f5",
    width: width / 1.2,
    height: height / 12,
  },
});
