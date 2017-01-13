/**
 * @flow
 */
'use strict';
import styles from '../styles/styles';

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';


export default class ToDoListItem extends Component {
  render() {
    var item = this.props.item;
  return (
    <View>
      <TouchableHighlight
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}>
        <View style={styles.container}>
          <Text style={[styles.txt, item.complete && styles.completed]}>
              {item.txt}
          </Text>
        </View>
        </TouchableHighlight>
      <View style={styles.hr}/>
    </View>
  );
}
}

module.exports = ToDoListItem;
