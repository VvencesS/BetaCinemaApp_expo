import React, { Component } from 'react';
import {
  Text, View, Image, TextInput, StyleSheet, Button, Dimensions, TouchableOpacity, Picker, ScrollView, TouchableHighlight
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import DateModalComponent from './modal/DateModalComponent';



const { width: WIDTH } = Dimensions.get('window')



export default class DangKyComponent extends Component {
    constructor(props){
      super(props);
      this._onPressDateModal=this._onPressDateModal.bind(this);
    }
    _onPressDateModal= () => {this.refs.dateModal.showDateModal()}
  render() {
    
    return (
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.text}>THÔNG TIN BẮT BUỘC</Text>
        </View>
        <View style={styles.view1}>
          <View style={styles.imputContainer}>
            <View style={{ flex: 1, borderRightColor: 'gray', borderRightWidth: 1 }}>
              <FontAwesome5 name="user-circle" size={22} color="gray" style={styles.imputIcon} />
            </View>
            <TextInput style={styles.textinput}
              placeholder='Họ Tên'
              placeholderTextColor='#00000061'
              underlineColorAndroid='transparent' />

            <View style={styles.imputContainer}>

              <MaterialCommunityIcons name="email-outline" size={22} color="gray" style={styles.imputIcon} />
              <TextInput style={styles.textinput}
                placeholder='Email'
                placeholderTextColor='#00000061'
                underlineColorAndroid='transparent'
              />
            </View>

            <View style={styles.imputContainer} >
              <MaterialIcons name="lock-outline" size={22} color="gray" style={styles.imputIcon} />
              <TextInput style={styles.textinput}
                placeholder='Mật Khẩu'
                placeholderTextColor='#00000061'
                underlineColorAndroid='transparent'
              />
            </View>
            <View style={styles.imputContainer}>
              <MaterialCommunityIcons name="lock-open-check" size={22} color="gray" style={styles.imputIcon} />
              <TextInput style={styles.textinput}
                placeholder='Nhập Lại Mật Khẩu'
                placeholderTextColor='#00000061'
                underlineColorAndroid='transparent'
              />
            </View>
            <View style={styles.imputContainer}>
              <SimpleLineIcons name="screen-smartphone" size={22} color="gray" style={styles.imputIcon} />
              <TextInput style={styles.textinput}
                placeholder='Số Điện Thoại'
                placeholderTextColor='#00000061'
                underlineColorAndroid='transparent'
              />
            </View>
          </View>
          <Text style={styles.text} style={{ marginTop: 15, paddingLeft: 10, }}>THÔNG TIN BỔ SUNG</Text>
        </View>
        <View style={styles.view2}>
          <View style={styles.imputContainer1}>
            <View style={styles.imputContainer}>
              <TouchableHighlight
              onPress={this.onPressDateModal}
              >
                alo
              </TouchableHighlight>
              <DateModalComponent ref={"dateModal"}/>
            </View>
          </View>
        </View>


        <Button title="Đăng nhập" onPress={() => this.props.navigation.navigate('DangNhap')} />
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
    marginTop: 10,
  },

  view2: {
    flex: 17,
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
})