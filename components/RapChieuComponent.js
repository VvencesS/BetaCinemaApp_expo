import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export default class RapChieuComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title_text}>Rạp phim BETA</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.content_one}>CHỌN RẠP THEO KHU VỰC</Text>
        </View>
        <View style={styles.list_tin}>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 16,
    width: "100%",
    height: "100%",
    backgroundColor:'#e6eef2'
  },
  title: {
    flex: 1.1,
    backgroundColor: "#357cd4",
  },
  title_text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 15,
    paddingStart: 15,
  },
  content: {
    flexDirection: "row",
    flex: 1,
    
  },
  content_one: {
    color:'#74c8f2',
    textTransform:"uppercase",
    flex:1,
    paddingStart:10,
    fontSize: 20,
    paddingTop:15,
  },
  list_tin: {
    flexDirection: "column",
    flex: 10, 
  },
  list_item:{
    flexDirection:'row',
    
  }
});
