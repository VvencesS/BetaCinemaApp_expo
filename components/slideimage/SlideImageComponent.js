import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Button, Pressable, Alert, Dimensions } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

var screen = Dimensions.get('window');

export default class SlideImageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree",
            ]
        };
    }
    render() {
        return (
            <SliderBox
                images={this.state.images}
                sliderBoxHeight={200}
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
                ImageComponentStyle={{ borderRadius: 7, width: screen.width - 10, marginTop: 10 }}
            />
        );
    }
}

// const styles = StyleSheet.create({});
