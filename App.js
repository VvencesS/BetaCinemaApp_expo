import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import HomeComponent from './components/HomeComponent';
import DangNhapComponent from './components/DangNhapComponent';
import DangKyComponent from './components/DangKyComponent';
import HeaderBarLichChieu from './components/home/HeaderBarLichChieu';
import ThongTinTaiKhoanComponent from './components/taikhoan/ThongTinTaiKhoanComponent';
import ThayDoiMatKhauComponent from './components/taikhoan/ThayDoiMatkhauComponent';
import LichChieuTheoPhimComponent from './components/home/LichChieuTheoPhimComponent';
import DatVeTheoPhimComponent from './components/lichchieutheophim/DatVeTheoPhimComponent';
import ChiTietPhimComponent from './components/lichchieutheophim/ChiTietPhimComponent';
import TrailerComponent from './components/lichchieutheophim/TrailerComponent';
import DatVeTheoRapComponent from './components/lichchieutheorap/DatVeTheoRapComponent';
import ChiTietKhuyenMaiComponent from './components/khuyenmai/ChiTietKhuyenMaiComponent';
import ChiTietTinBenLeComponent from './components/khuyenmai/ChiTietTinBenLeComponent';
import ThanhVienBetaComponent from './components/taikhoan/ThanhVienBetaComponent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen name="DangNhap" component={DangNhapComponent} options={{ title: 'Đăng nhập' }} />
        <Stack.Screen name="DangKy" component={DangKyComponent} options={{ title: 'Đăng ký' }} />
        <Stack.Screen name="Home" component={HomeComponent} options={{ headerShown: false }} />
        <Stack.Screen name="HeaderBarLichChieu" component={HeaderBarLichChieu} options={{ headerShown: false }} />
        <Stack.Screen name="ThongTinTaiKhoan" component={ThongTinTaiKhoanComponent} options={{ title: 'Thông tin tài khoản' }} />
        <Stack.Screen name="ThayDoiMatKhau" component={ThayDoiMatKhauComponent} options={{ title: 'Thay đổi mật khẩu' }} />
        <Stack.Screen name="DatVeTheoPhim" component={DatVeTheoPhimComponent} options={{ title: 'Đặt vé theo phim' }} />
        <Stack.Screen name="ChiTietPhim" component={ChiTietPhimComponent} options={{ title: 'Chi tiết phim' }} />
        <Stack.Screen name="Trailer" component={TrailerComponent} options={{ title: 'Trailer phim' }} />
        <Stack.Screen name="DatVeTheoRap" component={DatVeTheoRapComponent} options={{ title: 'Đặt vé theo rạp' }} />
        <Stack.Screen name="ChiTietKhuyenMai" component={ChiTietKhuyenMaiComponent} options={{ title: 'Tin mới và ưu đãi' }} />
        <Stack.Screen name="ChiTietTinBenLe" component={ChiTietTinBenLeComponent} options={{ title: 'Tin mới và ưu đãi' }} />
        <Stack.Screen name="ThanhVienBeta" component={ThanhVienBetaComponent} options={{ title: 'Thành viên Beta' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
