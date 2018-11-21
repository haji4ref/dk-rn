import React, {Component} from 'react';
import {
    StyleSheet, Text, ScrollView, FlatList
} from 'react-native';
import Product from '../components/Product'


export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: require('../data').data,
        };

        this.increaseProducts(3000);

        this.decreaseProducts(5000);

    }

    increaseProducts(intervalTime) {
        setInterval(() => {
            let arr = [];
            this.state.data.forEach((e) => {
                e.available = e.available > 1 ? e.available - 2 : e.available;
                arr.push(e);
            });
            this.setState({data: arr})
        }, intervalTime);
    }

    decreaseProducts(intervalTime) {
        setInterval(() => {
            let arr = [];
            this.state.data.forEach((e) => {
                e.available++;
                arr.push(e);
            });
            this.setState({data: arr})
        }, intervalTime);
    }

    render() {
        return (
            <ScrollView>
                <FlatList
                    data={this.state.data}
                    renderItem={({item,index}) =>
                        <Product
                            id={index}
                            name={item.name}
                            image={item.image}
                            cost={item.cost}
                            rate={item.rate}
                            available={item.available}
                            navigation={this.props.navigation}
                        />}
                    keyExtractor={item => item.name}
                />
            </ScrollView>
        );
    }
}