import React, {Component} from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';

export default class Title extends Component {
    render() {
        return (
            <Text style={styles.title}>برنامه من</Text>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        marginLeft: 20,
        fontFamily: "IRANSansWeb",
        // fontWeight:'bold',
        fontSize:20
    }
});