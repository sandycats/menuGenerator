/**
 * @flow
 */
'use strict';
import styles from '../styles/styles';
import t from 'tcomb-form-native';

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
var Form = t.form.Form;

var Recipe = t.struct({title: t.Str, complete: t.Bool});

var options = {
    fields: {
        title: {
            label: 'Recipe',
            placeholder: 'enter a recipe item here',
            autoFocus: true
        }
    }
};

export default class RecipeEdit extends Component {
    constructor() {
        super();
        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate() {
        var value = this.refs.form.getValue();
        if (value) {
            this.props.update(value, this.props.id);
        }
    }

    render() {
        return (
            <View style={styles.Recipe}>
                <Form
                    ref="form"
                    type={Recipe}
                    onChange={this._onChange}
                    options={options}
                    value={this.props.item}/>
                <TouchableHighlight
                    style={[styles.button, styles.saveButton]}
                    onPress={this.onUpdate}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        )
    }
}


module.exports = RecipeEdit;
