/**
 * @flow
 */
'use strict';
import styles from '../styles/styles';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';

//import realm from '../DB.js';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Alert
} from 'react-native';

import Map from 'array-map';

import Realm from 'realm';

// you can access and set all properties defined in your model
// console.log('Recipe is here ' + recipe.title + ' ' + recipe.text);
//});

export default class RecipeContainer extends Component {

    constructor() {
        super();

        let realm = new Realm();
        let recipesFromDb = realm.objects('Recipes');

        let recipes = Map(recipesFromDb, function(key) {
            return key;
        })

        this.state = {
            items: recipes,
            realm: realm
        };

        this.alertMenu = this.alertMenu.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.openItem = this.openItem.bind(this);

    }

    componentWillUnmount() {
        this.state.realm.close();
    }

    alertMenu(rowData, rowID) {
        Alert.alert('Quick Menu', null, [
            {
                text: 'Delete',
                onPress: () => this.deleteItem(rowID)
            }, {
                text: 'Edit',
                onPress: () => this.openItem(rowData, rowID)
            }, {
                text: 'Cancel'
            }
        ])
    }

    deleteItem(index) {
        var items = this.state.items;
        items.splice(indemx, 1);
        this.setState({items: items})
    }

    updateItem(item, index) {
        var items = this.state.items;
        if (index) {
            items[index] = item;
            this.state.realm.write(() => {
                this.state.realm.create('Recipes', item, true);
            });

        } else {
            items.push(item);
            this.state.realm.write(() => {
                this.state.realm.create('Recipes', item);
            });
        }
        this.setState({items: items});
        this.props.navigator.pop();
    }

    openItem(rowData, rowID) {
        if (!rowID) {
            rowData = {
                id: Date.now(),
                image: ' ',
                text: ' ',
                ingridients: ' '
            }
        }
        this.props.navigator.push({
            name: rowData && rowData.title || 'New Item',
            component: RecipeEdit,
            passProps: {
                item: rowData,
                id: rowID,
                update: this.updateItem
            }
        });
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <RecipeList items={this.state.items} onPressItem={this.openItem} onLongPressItem={this.alertMenu}/>
                <TouchableHighlight style={[styles.button, styles.newButton]} underlayColor='#99d9f4' onPress={this.openItem}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = RecipeContainer;
