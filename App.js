/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, View
} from 'react-native';

import {createStackNavigator} from 'react-navigation';
import Home from './src/screens/Home';
import DetailedProduct from "./src/screens/DetailedProduct";

const AppNavigator = createStackNavigator({
        Home: {screen: Home},
        DetailedProduct: {screen: DetailedProduct}
    },
    {
        transitionConfig: () => ({
            containerStyle: {
                // marginTop: -80,
            }
        }),
    });

export default class App extends Component {
    render() {
        return (
            <AppNavigator/>
        )
    }
}


//
const styles = StyleSheet.create({
    globals: {
        fontFamily: "IRANSansWeb",
    }
});
