import React, { Component } from 'react';
import {
    Text, View, Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Components
import SapChieuComponent from '../lichchieutheophim/PhimSapChieuComponent';
import DangChieuComponent from '../lichchieutheophim/PhimDangChieuComponent';
import SuatChieuSomComponent from '../lichchieutheophim/SuatChieuSomComponent';

import { urlNowShowing, urlComingSoon, urlSneakShow, urlLocalhost } from '../../APILinks';

const LichChieuTab = createMaterialTopTabNavigator();

export default class LichChieuTheoPhimComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: 0,
            allNowShowingMovie: [],
            allComingSoonMovie: [],
            allSneakShowMovie: [],
        }
    }

    componentDidMount() {
        this.getNowShowingMovie()
        this.getComingSoonMovie()
        this.getSneakShowMovie()
    }

    getNowShowingMovie = () => {
        console.log(urlLocalhost + urlNowShowing)
        return fetch(urlLocalhost + urlNowShowing, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                this.setState({ success: responseJson.success });
                if (this.state.success == 1) {

                    this.setState({ allNowShowingMovie: responseJson.nowShowingMovie });
                    console.log('allNowShowingMovie ', this.state.allNowShowingMovie);
                }
                else {
                    console.warn('responseJson', responseJson);
                    Alert.alert("Thông báo!", responseJson.message);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getComingSoonMovie = () => {
        console.log(urlLocalhost + urlComingSoon)
        return fetch(urlLocalhost + urlComingSoon, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                this.setState({ success: responseJson.success });
                if (this.state.success == 1) {

                    this.setState({ allComingSoonMovie: responseJson.comingSoonMovie });
                    console.log('allComingSoonMovie ', this.state.allComingSoonMovie);
                }
                else {
                    console.warn('responseJson', responseJson);
                    Alert.alert("Thông báo!", responseJson.message);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getSneakShowMovie = () => {
        console.log(urlLocalhost + urlSneakShow)
        return fetch(urlLocalhost + urlSneakShow, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                this.setState({ success: responseJson.success });
                if (this.state.success == 1) {

                    this.setState({ allSneakShowMovie: responseJson.sneakShowMovie });
                    console.log('allSneakShowMovie ', this.state.allSneakShowMovie);
                }
                else {
                    console.warn('responseJson', responseJson);
                    Alert.alert("Thông báo!", responseJson.message);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <LichChieuTab.Navigator
                initialRouteName='ĐangChieu'
                tabBarOptions={{
                    activeTintColor: '#03599d',
                    inactiveTintColor: 'gray',
                    labelStyle: { fontWeight: 'bold', fontSize: 13 }
                }}
                style={{ fontWeight: 'bold' }}
                swipeEnabled={true}
            >
                <LichChieuTab.Screen
                    name="SapChieu"
                    component={() => <SapChieuComponent allComingSoonMovie={this.state.allComingSoonMovie} />}
                    options={{ title: "SẮP CHIẾU" }}
                />
                <LichChieuTab.Screen
                    name="ĐangChieu"
                    component={() => <DangChieuComponent allNowShowingMovie={this.state.allNowShowingMovie} />}
                    options={{ title: "ĐANG CHIẾU" }}
                />
                <LichChieuTab.Screen 
                name="SuatChieuSom" 
                component={() => <SuatChieuSomComponent allSneakShowMovie={this.state.allSneakShowMovie} />} 
                options={{ title: "SUẤT CHIẾU SỚM" }} 
                />
            </LichChieuTab.Navigator>
        );
    }
}
