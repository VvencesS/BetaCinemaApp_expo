import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TinBenLeComponent from './components/tintuc/TinBenLeComponent';
import ChiTietPhimComponent from './components/phim/ChiTietPhimComponent';
import RapChieuComponent from './components/RapChieuComponent';
import DoiMatKhauComponent from './components/taikhoan/DoiMatKhauComponent';
import ThongTinTaiKhoanComponent from './components/taikhoan/ThongTinTaiKhoanComponent';
import ThanhVienComponent from './components/taikhoan/ThanhVienComponent';

export default function App() {
  return (
    <View>
      <ThanhVienComponent />
    </View>
  );
}

