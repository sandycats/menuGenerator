/**
 * @flow
 */
'use strict';

import styles from './application/styles/styles';
import RecipeListContainer from './application/components/RecipeListContainer';

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
        initialRoute={{ title: 'Recipe List', component:RecipeListContainer, index: 0 }}
        renderScene={this.renderScene}
      />
    );
  }}

AppRegistry.registerComponent('menuGenerator', () => menuGenerator);
