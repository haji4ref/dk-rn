import React, {Component} from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';

import Header from '../components/Header';
import Body from '../containers/Body';
import Title from "../utils/Title";

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: Title,
    };

    render() {

        return (
            <View>
                {/*<Header/>*/}
                <Body navigation={this.props.navigation}/>
            </View>
        );
    }
}