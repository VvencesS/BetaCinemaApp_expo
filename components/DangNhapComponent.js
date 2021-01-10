import React, { Component } from 'react';
import {
  Text, View, Image, TextInput, StyleSheet, Button, Dimensions, TouchableOpacity
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const { width: WIDTH } = Dimensions.get('window')

export default class DangNhapComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}></View>
        <View style={styles.view2}>
          <View style={styles.imputContainer}>
            <View style={{ flex: 1, borderRightColor: 'gray', borderRightWidth: 1 }}>
              <FontAwesome5 name="user-circle" size={22} color="gray" style={styles.imputIcon} />
            </View>
            <TextInput style={styles.textinput}
              keyboardType='email-address'
              placeholder='Email hoặc tên đăng nhập'
              placeholderTextColor='#00000061'
              underlineColorAndroid='transparent' />
          </View>

          <View style={styles.imputContainer}>
            <MaterialIcons name="lock-outline" size={22} color="gray" style={styles.imputIcon} />
            <TextInput style={styles.textinput}
              placeholder='Mật Khẩu'
              placeholderTextColor='#00000061'
              underlineColorAndroid='transparent'
            />
          </View>

          <Text style={styles.text2}>Quên mật khẩu ?</Text>


          <TouchableOpacity style={styles.btnDN} >
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
          <TouchableOpacity style={styles.btnDN} >
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


        </View>
        <View style={styles.view3}>
          <Button style={styles.btnDK} title="Đăng ký" onPress={() => this.props.navigation.navigate('DangKy')} />
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

  imputContainer: {
    marginTop: 10,
  },
  textinput: {
    width: WIDTH - 55,
    height: 50,
    marginLeft: 27,
    paddingLeft: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5
  },

  imputIcon: {
    position: 'absolute',
    marginTop: 14,
    left: 40,
    borderRightColor: 'gray',
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
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    marginLeft:8,
    left: 20,
    borderRadius: 5,
  },
  buttonDN: {
    width: WIDTH - 55,
    height: 50,
    borderRadius: 5,

  },
  btnDK: {
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    left: 20,
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    paddingTop: 10,
  },

})