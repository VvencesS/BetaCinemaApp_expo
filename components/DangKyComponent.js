import React, { Component } from 'react';
import {
  Text, View, CheckBox, TextInput, StyleSheet, Button, Dimensions, TouchableOpacity, Picker, ScrollView, TouchableHighlight, Alert
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const { width: WIDTH } = Dimensions.get('window')
export default class DangKyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    }
  }

  render() {

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.view}>
            <Text style={styles.title}>THÔNG TIN BẮT BUỘC</Text>
          </View>
          <View style={styles.view1}>
            <View style={styles.imputContainer}>
              <View style={{ flex: 1, borderRightColor: '#A8A1A1', borderRightWidth: 1 }}>
                <FontAwesome5 name="user-circle" size={22} color="#A8A1A1" style={styles.imputIcon} />
              </View>
              <TextInput style={styles.textinput}
                placeholder='Họ Tên'
                placeholderTextColor='#00000061'
                underlineColorAndroid='transparent' />

              <View style={styles.imputContainer}>

                <MaterialCommunityIcons name="email-outline" size={22} color="#A8A1A1" style={styles.imputIcon} />
                <TextInput style={styles.textinput}
                  placeholder='Email'
                  placeholderTextColor='#00000061'
                  underlineColorAndroid='transparent'
                />
              </View>

              <View style={styles.imputContainer} >
                <MaterialIcons name="lock-outline" size={22} color="#A8A1A1" style={styles.imputIcon} />
                <TextInput style={styles.textinput}
                  placeholder='Mật Khẩu'
                  placeholderTextColor='#00000061'
                  underlineColorAndroid='transparent'
                />
              </View>
              <View style={styles.imputContainer}>
                <MaterialCommunityIcons name="lock-open-check" size={22} color="#A8A1A1" style={styles.imputIcon} />
                <TextInput style={styles.textinput}
                  placeholder='Nhập Lại Mật Khẩu'
                  placeholderTextColor='#00000061'
                  underlineColorAndroid='transparent'
                />
              </View>
              <View style={styles.imputContainer}>
                <SimpleLineIcons name="screen-smartphone" size={22} color="#A8A1A1" style={styles.imputIcon} />
                <TextInput style={styles.textinput}
                  placeholder='Số Điện Thoại'
                  placeholderTextColor='#00000061'
                  underlineColorAndroid='transparent'
                />
              </View>
            </View>
          </View>
          <View style={styles.view}>
            <Text style={styles.title}>THÔNG TIN BỔ SUNG</Text>
          </View>
          <View style={styles.view2}>
            <View style={styles.imputContainer}>
              <MaterialIcons name="cake" size={22} color="#A8A1A1" style={styles.imputIcon} />
              <TextInput style={styles.textinput}
                placeholder='Ngày sinh'
                placeholderTextColor='#00000061'
                underlineColorAndroid='transparent'
              />
            </View>
            <View style={styles.imputContainer}>
              <FontAwesome name="transgender" size={22} color="#A8A1A1" style={styles.imputIcon} />
              <TextInput style={styles.textinput}
                placeholder='Giới tính'
                placeholderTextColor='#00000061'
                underlineColorAndroid='transparent'
              />
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={this.state.isSelected}
                onValueChange={() => this.setState({ isSelected: !this.state.isSelected })}
                style={styles.checkbox}
              />
              <Text style={styles.label}>
                <Text style={{ fontSize: 16, }}>Tôi cam kết tuân theo</Text>
                <Text> </Text>
                <Text style={styles.colorLink}
                  onPress={() => Alert.alert('Thông báo', 'Vui lòng lên trang chủ để xem chi tiết!')}
                >
                  chính sách bảo mật
                </Text>
                <Text> </Text>
                <Text style={{ fontSize: 16, }}>và</Text>
                <Text> </Text>
                <Text style={styles.colorLink}
                  onPress={() => Alert.alert('Thông báo', 'Vui lòng lên trang chủ để xem chi tiết!')}
                >
                  điều khoản sử dụng
                </Text>
                <Text> </Text>
                <Text style={{ fontSize: 16, }}>của BetaCineplex.</Text>
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.btnDN}
            onPress={() => this.props.navigation.navigate('DangNhap')}
          >
            <LinearGradient
              colors={['#0a64a7', '#258dcf', '#3db1f3']}
              start={[0, 0]}
              end={[1, 1]}
              location={[0.5, 0.15, 1]}
              style={styles.buttonDN}
            >
              <Text style={styles.text}>ĐĂNG Ký</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  view: {
    flex: 1.5,
    marginTop: 20,
    paddingLeft: 10,
  },
  view1: {
    flex: 80,
  },
  imputContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5F5F65',
    marginLeft: 25,
    marginTop: 10,
    marginBottom: 10
  },
  view2: {
    flex: 17,
  },
  textinput: {
    width: WIDTH - 55,
    height: 50,
    marginLeft: 27,
    paddingLeft: 50,
    borderColor: '#A8A1A1',
    borderWidth: 1,
    borderRadius: 5
  },

  imputIcon: {
    position: 'absolute',
    marginTop: 14,
    left: 40,
    borderRightColor: '#A8A1A1',
    borderRightWidth: 1,
    paddingRight: 10
  },
  checkboxContainer: {
    flexDirection: "row",
    margin: 20
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    width: 315,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },
  colorLink: {
    color: "#0a64a7",
    marginLeft: 2,
    marginRight: 2,
    fontSize: 16,
  },
  /*Style button Đăng ký*/
  btnDN: {
    width: WIDTH - 55,
    height: 50,
    justifyContent: 'center',
    borderColor: '#A8A1A1',
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 8,
    left: 20,
    borderRadius: 5,
  },
  buttonDN: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH - 55,
    height: 50,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
})