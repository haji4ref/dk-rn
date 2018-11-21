import React, {Component} from 'react';

import {Header} from 'react-native-elements';

export default class MyHeader extends Component {
    render() {
        return (
            <Header
                leftComponent={{icon: 'menu', color: '#fff'}}
                centerComponent={{text: 'برنامه من', style: {color: '#fff',fontFamily:'IRANSansWeb'}}}
                rightComponent={{icon: 'home', color: '#fff'}}
            />
        );
    }
}