import React, { Component } from 'react';
import {
    Text, View, Image, TextInput, StyleSheet, Button, Dimensions, TouchableOpacity, Picker, ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import CalendarPicker from 'react-native-calendar-picker';

var screen = Dimensions.get('window');
export default class DateModalComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedStartDate: null,
    //     };
    //     // this.onDateChange = this.onDateChange.bind(this);
    // }
    // showDateModal = () => {this.refs.dateModal.open()};

    // onDateChange(date) {
    //     this.setState({
    //         selectedStartDate: date,
    //     });
    // }
    render() {
        // const { selectedStartDate } = this.state;
        // const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <Modal
                // ref={"dateModal"}
                // style={{
                //     justifyContent: 'center',
                //     width: screen.width - 80,
                //     height: 280,
                // }}
                // position='center'
            
            >
                {/* <CalendarPicker
                    onDateChange={this.onDateChange}
                /> */}

                <View>
                    <Text>SELECTED DATE:</Text>
                </View>
            </Modal>
        )
    }

}

