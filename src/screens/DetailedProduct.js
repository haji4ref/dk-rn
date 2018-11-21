import React, {Component} from 'react';
import {
    Image,
    StyleSheet, Text, TouchableOpacity, View, ScrollView
} from 'react-native';
import Header from '../components/Header';
import {Card, Divider, Icon} from "react-native-elements";
import ViewMoreText from 'react-native-view-more-text';
import PersianNumber from "../utils/PersianNumber";

const data = require('../data').data;


export default class DetailedProduct extends Component {
    renderViewMore(onPress) {
        return (
            <Text
                style={styles.lessMore}
                onPress={onPress}>بیشتر...</Text>
        )
    }

    renderViewLess(onPress) {
        return (
            <Text
                style={styles.lessMore}
                onPress={onPress}>کمتر</Text>
        )
    }


    render() {
        const {navigation} = this.props;
        const id = navigation.getParam('id');

        const product = data[id];
        return (
            <ScrollView>
                <Card>
                    <Text style={styles.title}>
                        {product.name}
                    </Text>

                    <Divider/>

                    <Image
                        style={styles.image}
                        source={{uri: product.image}}
                    />

                    <Divider/>

                    <View style={{marginVertical: 10}}>
                        <ViewMoreText
                            renderViewMore={this.renderViewMore}
                            renderViewLess={this.renderViewLess}
                            numberOfLines={3}>
                            <Text style={styles.detail}>
                                {product.detail}
                            </Text>
                        </ViewMoreText>
                    </View>

                    <Divider/>

                    <View style={styles.details}>
                        <Text style={styles.font}>
                            موجود:
                            {
                                product.available ?
                                    (
                                        <Text style={styles.available}>هست</Text>
                                    )
                                    :
                                    (
                                        <Text style={styles.notAvailable}>نیست</Text>
                                    )
                            }
                        </Text>

                        <Text style={styles.font}>
                            امتیاز:<PersianNumber number={product.rate}/>
                        </Text>
                    </View>

                    <View style={styles.details}>
                        <Text style={styles.font}>
                            قیمت:<PersianNumber number={product.cost}/>ریال
                        </Text>

                        <Text style={styles.font}>
                            حداکثر در هر سفارش:<PersianNumber number={product.maxOrder}/>
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.detailBtn}>
                        <Icon
                            color="white"
                            name='add'/>
                        <Text style={styles.detailBtnText}>اضافه به سبد خرید</Text>

                    </TouchableOpacity>
                </Card>


            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 12
    },
    image: {
        width: '100%',
        height: 250
    },
    title: {
        fontFamily: "IRANSansWeb",
        // fontWeight:'bold',
        fontSize: 30
    },
    detail: {
        fontFamily: "IRANSansWeb",
        fontSize: 15,
    },
    lessMore: {
        fontFamily: "IRANSansWeb",
        fontSize: 15,
        color: 'royalblue'
    },
    font: {
        fontFamily: "IRANSansWeb"
    },
    available: {
        color: 'green',
    },
    notAvailable: {
        color: 'red',
    },
    details: {
        paddingHorizontal:12,
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
    detailBtnText: {
        color: 'white',
        fontFamily: "IRANSansWeb"
    }
});