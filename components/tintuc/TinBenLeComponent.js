import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class TinBenLeComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title_text}>Tin mới và ưu đãi</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.content_one}>Khuyến mại mới</Text>
          <Text style={styles.content_two}>Tin bên lề</Text>
        </View>
        <ScrollView style={styles.list_tin}>
          <View style={styles.list_item}>
            <Image 
            style={styles.image}
            source={{uri: 'https://files.betacorp.vn/files/ecm/2020/12/22/3-180723-221220-68.png'}}></Image>
            <Text style={styles.text}>Beta Cinemas Quang Trung - Khai trương đầu năm 2021</Text>
          </View>
          <View style={styles.kc} />
          <View style={styles.list_item}>
            <Image 
            style={styles.image}
            source={{uri: 'https://files.betacorp.vn/files/ecm/2020/11/30/545x415-174329-301120-64.jpg'}}></Image>
            <Text style={styles.text}>Beta Cinemas Giải Phóng - Khai trương 20/11/2020</Text>
          </View>
          <View style={styles.kc} />
          <View style={styles.list_item}>
            <Image 
            style={styles.image}
            source={{uri: 'https://files.betacorp.vn/files/ecm/2020/10/29/the-croods-2-141047-291020-78.jpg'}}></Image>
            <Text style={styles.text}>THE CROODS: A NEW AGE | 3 bom tấn hoạt hình không thể bỏ lỡ dịp cuối năm 2020</Text>
          </View>
          <View style={styles.kc} />
          <View style={styles.list_item}>
            <Image 
            style={styles.image}
            source={{uri: 'https://files.betacorp.vn/files/ecm/2019/09/04/dsc08832-kpth-thumb-092102-040919-70.jpg'}}></Image>
            <Text style={styles.text}>Anh Thầy Ngôi Sao - Ước Mơ Dang Dở Trở Thành Câu Chuyện Hài Duyên Dáng</Text>
          </View>
          <View style={styles.kc} />
          <View style={styles.list_item}>
            <Image 
            style={styles.image}
            source={{uri: 'https://files.betacorp.vn/files/ecm/2019/02/07/alita-art-230654-070219-81.png'}}></Image>
            <Text style={styles.text}>Alita: Thiên Thần Chiến Binh - Vượt Ngoài Khuôn Khổ Kỹ Xảo 3D</Text>
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
    backgroundColor:'#e6eef2'
  },
  title: {
    backgroundColor: "#357cd4",
  },
  title_text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    paddingStart: 15,
    padding:15,
  },
  content: {
    flexDirection: "row",
    
  },
  content_one: {
    color:'#74c8f2',
    textTransform:"uppercase",
    textAlign:'center',
    fontSize: 16,
    paddingTop:15,
    flex:1
  },
  content_two: {
    color:'#74c8f2',
    textTransform:"uppercase",
    textAlign:'center',
    fontSize: 16,
    paddingTop:15,
    flex:1
  },
  list_tin: {
    flexDirection: "column",
    padding:15,
    marginBottom:20,
  },
  list_item:{
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:6,
    height:height/8,
    width:'100%',
  },
  image:{
    width:130,
    height:80,
    borderRadius:5,
    paddingStart:1,
    flex:3
  },
  text:{
    fontSize:15,
    color:'#6cc4b1',
    padding:7,
    flex:6
  },
  kc:{
    height:15,
  }
});
