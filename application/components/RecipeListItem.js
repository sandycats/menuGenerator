/**
 * @flow
 */
'use strict';
import styles from '../styles/styles';

import React, {Component} from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';

export default class RecipeListItem extends Component {
    render() {
        var item = this.props.item;
        return (
            <View>
                <TouchableHighlight onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
                    <View>
                        <View style={styles.rowContainer}>
                            <Image source={require('../../pictures/default.png')} style={styles.thumb}/>

                            <View style={styles.container}>
                                <Text style={[
                                    styles.title, item.complete && styles.completed
                                ]}>
                                    {item.title}
                                </Text>
                                <Text style={styles.ingridients}>
                                    {item.ingridients}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.hr}/>
                    </View>

                </TouchableHighlight>
                <View style={styles.hr}/>
            </View>
        );
    }
}

module.exports = RecipeListItem;
