import React, { Component } from 'react';
import {
    Text, View, Button, ScrollView, Image, Dimensions, StyleSheet, TouchableHighlight
} from 'react-native';

var screen = Dimensions.get('window');

export default class ItemKhuyenMaiComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={ styles.container }>
                <View style={styles.list_item}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.props.item.anhtmvakm, }}
                    />
                    <Text style={{ width: screen.width * 0.49 }}></Text>
                    <Text style={styles.text}>{this.props.item.tentmvakm}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: screen.width - 20,
        height: screen.height / 8 + 10,
        marginTop: 20,
    },
    list_item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 5,
        width: screen.width - 30,
        height: screen.height / 8 - 10,
        shadowOpacity: 0.2,
        left: 20,
    },
    image: {
        position: 'absolute',
        width: screen.width * 0.5,
        height: 90,
        borderRadius: 3,
        bottom: 10,
        left: -10,
    },
    text: {
        width: screen.width * 0.45,
        fontSize: 15,
        color: 'gray',
        fontWeight: 'bold',
        paddingRight: 5,
        paddingTop: 10,
    },
});
