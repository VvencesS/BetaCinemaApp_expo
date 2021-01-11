import React, { Component } from 'react';
import {
    Text, View, Image, Dimensions, ScrollView, StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get("screen");

export default class ChiTietKhuyenMaiComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.route.params
        }
        console.log('tin: ', this.state.item)
    }
    
    render() {
        
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.state.item.anhTin }}
                    />
                    <Text style={styles.title}>
                        {this.state.item.tieuDe}
                    </Text>
                    <Text style={styles.content}>
                        {this.state.item.noiDung}
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    image: {
        width: width,
        height: height * 0.3,
        borderBottomLeftRadius: width/4,
        borderBottomRightRadius: width/4,
    },
    title: {
        fontSize: 18,
        color: '#6E6E6E',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10, 
        marginBottom: 30,
    },
    content: {
        fontSize: 17,
        color: '#585858',
        padding: 5,  
        textAlign: 'justify',
        lineHeight: 25,
    },
});
