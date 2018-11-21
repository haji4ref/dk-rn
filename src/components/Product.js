import React, {Component} from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity
} from 'react-native';

import PersianNumber from '../utils/PersianNumber';
import {Button, Card, Divider} from 'react-native-elements';

import {createStackNavigator} from 'react-navigation';

export default class Product extends Component {

    render() {
        return (

            <Card>
                <View style={styles.head}>
                    <Image
                        style={{width: 70, height: 70}}
                        source={{uri: this.props.image}}
                    />
                    <Text style={styles.font}>
                        {this.props.name}
                    </Text>
                </View>

                <Divider/>

                <View style={styles.details}>
                    <Text style={styles.font}>
                        موجودی:<PersianNumber number={this.props.available}/>
                    </Text>

                    <Text style={styles.font}>
                        امتیاز:<PersianNumber number={this.props.rate}/>
                    </Text>

                    <Text style={styles.font}>
                        قیمت:<PersianNumber number={this.props.cost}/>ریال
                    </Text>
                </View>

                <View>
                    <TouchableOpacity
                        disabled={!this.props.available}
                        onPress={() => this.props.navigation.navigate('DetailedProduct', {id: this.props.id})}
                        style={this.props.available ? styles.detailBtn : styles.disabledDetailBtn}>
                        <Text style={styles.detailBtnText}>توضیحات بیشتر...</Text>
                    </TouchableOpacity>

                </View>
            </Card>


        );
    }
}
const styles = StyleSheet.create({
    font: {
        fontFamily: "IRANSansWeb"
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'right'
    },
    available: {
        color: 'green',
    },
    notAvailable: {
        color: 'red',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'right',
        marginVertical: 12
    },
    detailBtn: {
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3db527'
    },
    disabledDetailBtn: {
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#a6a6a6'
    },
    detailBtnText: {
        color: 'white',
        fontFamily: "IRANSansWeb"
    }
});