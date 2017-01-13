/**
 * @flow
 */
'use strict';

import styles from './application/styles/styles';
import ToDoListContainer from './application/components/ToDoListContainer';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

export default class menuGenerator extends Component {

  renderScene(route, navigator) {
    return <route.component
      title={route.title}
      navigator={navigator}
      {...route.passProps} />
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'ToDo List', component:ToDoListContainer, index: 0 }}
        renderScene={this.renderScene}
      />
    );
  }}

AppRegistry.registerComponent('menuGenerator', () => menuGenerator);
