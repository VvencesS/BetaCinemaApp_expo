import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Components
import TrangChuComponent from './components/TrangChuComponent';
import DangNhapComponent from './components/DangNhapComponent';
import DangKyComponent from './components/DangKyComponent';
//Screen names
import { DangNhapScreen, DangKyScreen, TrangChuScreen } from './screenNames';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={TrangChuScreen}>
        <Stack.Screen
          name={TrangChuScreen}
          component={TrangChuComponent}
          options={{ title: 'Trang chủ' }}
        />
        <Stack.Screen
          name={DangNhapScreen}
          component={DangNhapComponent}
          options={{
            title: 'Đăng nhập',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name={DangKyScreen}
          component={DangKyComponent}
          options={{ title: 'Đăng ký' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
