/**
 * @flow
 */
'use strict';
import styles from '../styles/styles';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';

import Realm from 'realm';
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

var _recipes = [
    {
        id: 1,
        complete: false,
        title: 'Каша',
        image: './pictures/default.png',
        ingridients: [
            'крупа', 'вода', 'сіль'
        ],
        text: 'крупу  покласти у воду, додати сіль, поставити на середній вогонь, варити до готовності'
    }, {
        id: 2,
        complete: true,
        title: 'Млинці',
        image: './pictures/default.png',
        ingridients: [
            'борошно', 'молоко', 'сіль', 'яйця', 'цукор'
        ],
        text: 'змішати всі інгридієнти. сковорідкурозігріти і на неї викладати ложкою тісто'
    }, {
        id: 3,
        complete: true,
        title: 'омлет',
        image: './pictures/default.png',
        ingridients: [
            'борошно', 'молоко', 'сіль', 'яйця', 'цукор'
        ],
        text: 'яйця взбити, додати сіль, молоко, трохи борошна і на сковорідку'
    }
];

export default class RecipeContainer extends Component {
    constructor() {
        super();

        this.state = {
            items: _recipes
        };
        let realm = new Realm({
            schema: [
                {
                    name: 'Dog',
                    properties: {
                        name: 'string'
                    }
                }
            ]
        });

        realm.write(() => {
            realm.create('Dog', {name: 'Rex'});
        });
        console.log(realm.objects('Dog').length);

        this.alertMenu = this.alertMenu.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.openItem = this.openItem.bind(this);

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
        items.splice(index, 1);
        this.setState({items: items})
    }

    updateItem(item, index) {
        var items = this.state.items;
        if (index) {
            items[index] = item;
        } else {
            items.push(item)
        }
        this.setState({items: items});
        this.props.navigator.pop();
    }

    openItem(rowData, rowID) {
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
