import React, { Component } from 'react';
import {
  Text, View, Image, TextInput, StyleSheet, Button, Dimensions, TouchableOpacity, Alert
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

import { signin } from '../APILinks';

const { width: WIDTH } = Dimensions.get('window')

export default class DangNhapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      matKhau: "",
      checkLogin: 0
    }
  }

  _onLoginSubmit = () => {
    console.log(signin)
    return fetch(signin, { //Promise
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        matkhau: this.state.matKhau,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ checkLogin: responseJson.success });
        if (this.state.checkLogin == 1) {
          console.warn('responseJson ', responseJson);

          Alert.alert("Thông báo!", "Bạn đã đăng nhập thành công!");
          this.props.navigation.navigate('Home');
        }
        else {
          console.warn('responseJson', responseJson);
          Alert.alert("Thông báo!", "Bạn đã đăng nhập không thành công!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}></View>

        <View style={styles.view2}>
          <View style={styles.inputContainer}>
            <View style={{ flex: 1, borderRightColor: '#A8A1A1', borderRightWidth: 1 }}>
              <FontAwesome5 name="user-circle" size={22} color="#A8A1A1" style={styles.inputIcon} />
            </View>
            <TextInput style={styles.textinput}
              keyboardType='email-address'
              placeholder='Email hoặc tên đăng nhập'
              placeholderTextColor='#00000061'
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({ email: email })}
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons name="lock-outline" size={22} color="#A8A1A1" style={styles.inputIcon} />
            <TextInput style={styles.textinput}
              placeholder='Mật Khẩu'
              placeholderTextColor='#00000061'
              underlineColorAndroid='transparent'
              secureTextEntry={true}
              onChangeText={(matKhau) => this.setState({ matKhau: matKhau })}
            />
          </View>
          <TouchableOpacity onPress={() => Alert.alert('Thông báo', 'Quý khách vui lòng cố nhớ lại!')}>
            <Text style={styles.text2}>Quên mật khẩu ?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnDN} onPress={this._onLoginSubmit}>
            <LinearGradient
              colors={['#fc3606', '#f44a19', '#fc7704']}
              start={[0, 0]}
              end={[1, 1]}
              location={[0.5, 0.15, 1]}
              style={styles.buttonDN}
            >
              <Text style={styles.text}>ĐĂNG NHẬP</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnDN}
            onPress={() => Alert.alert('Thông báo', 'Chức năng đang trong quá trình thử nghiêm.Vui lòng thử phương thức đăng nhập khác!')}
          >
            <LinearGradient
              colors={['#0b5170', '#16729a', '#67bbe0']}
              start={[0, 0]}
              end={[1, 1]}
              location={[0.5, 0.15, 1]}
              style={styles.buttonDN}
            >
              <Text style={styles.text}>ĐĂNG NHẬP BẰNG FACEBOOK</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.underline}>
            <View style={styles.line}></View>
            <Text style={{ color: '#A8A1A1', fontSize: 16, }}>Hoặc</Text>
            <View style={styles.line}></View>
          </View>

          <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('DangKy')}>
            <Text style={styles.btnDKText}>Đăng ký tài khoản Beta Cineplex</Text>
          </TouchableOpacity>

        </View>
      </View>
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

  text1: {
    paddingTop: 5,
    paddingLeft: 20,
    color: 'white',
    fontSize: 16,
  },
  view1: {
    flex: 10,

  },
  view2: {
    flex: 50,
  },
  view3: {
    flex: 35,
  },

  inputContainer: {
    marginTop: 10,
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

  inputIcon: {
    position: 'absolute',
    marginTop: 14,
    left: 40,
    borderRightColor: '#A8A1A1',
    borderRightWidth: 1,
    paddingRight: 10
  },
  text2: {
    paddingLeft: 25,
    marginTop: 15,
    color: 'skyblue',
    textDecorationLine: 'underline',
  },
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
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  underline: {
    width: WIDTH - 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 45,
    marginLeft: 27,
  },
  line: { width: 145, height: 1, backgroundColor: '#A8A1A1' },
  btnDKText: {
    fontSize: 18,
    color: '#13141D',
    marginTop: 45,
  },
})