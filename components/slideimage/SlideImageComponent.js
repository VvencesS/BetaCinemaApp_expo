import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Button, Pressable, Alert, Dimensions } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

var screen = Dimensions.get('window');

export default class SlideImageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://files.betacorp.vn/files/ecm/2021/01/08/1702x621-lua-dao-102511-080121-29.jpg",
                "https://files.betacorp.vn/files/ecm/2020/12/31/1702x621-45k-ncqpn-180707-311220-97.jpg",
                "https://files.betacorp.vn/files/ecm/2020/12/31/1702x621-airpay-180813-311220-34.jpg",
                "https://files.betacorp.vn/files/ecm/2021/01/06/1702x621-nhuong-quyen-182208-060121-79.jpg",
            ]
        };
    }
    render() {
        return (
            <SliderBox
                images={this.state.images}
                sliderBoxHeight={150}
                dotColor="#258dcf"
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "rgba(128, 128, 128, 0.92)"
                }}
                autoplay={true}
                ImageComponentStyle={{ borderRadius: 7,  height: 150, width: screen.width - 10 ,}}
            />
        );
    }
}

// const styles = StyleSheet.create({});
