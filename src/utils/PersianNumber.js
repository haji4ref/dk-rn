import React, {Component} from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';

const latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
const latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];

export default class PersianNumber extends Component {
    castToPersian(number) {
        let string = number.toString();
        for (let i = 0; i < 10; i++) {
            string = string.replace(latinNumbers[i], latinToPersianMap[i]);
        }
        return string;
    }

    render() {
        return (
            <Text style={{fontFamily: 'IRANSansWeb', paddingHorizontal: 12}}>
                {
                    this.castToPersian(this.props.number)
                }
            </Text>
        );
    }
}