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
  Image,
  TouchableHighlight
} from 'react-native';
var Form = t.form.Form;

var Recipe = t.struct({
  title: t.Str,
ingridients: t.list( t.Str),
  text: t.Str,
  isBreakfast: t.Bool
});

var listTransformer = {
  format: function (value) {
    return Array.isArray(value) ? value.join(' ') : value;
  },
  parse: function (str) {
    return str ? str.split(' ') : [];
  }
};

var options = {
    fields: {
        title: {
            label: 'Назва',
            placeholder: 'enter a recipe item here'
        },
        ingridients: {
            label: 'Інгридієнти',
            factory: t.form.Textbox,
            transformer: listTransformer,
            help: 'Інгридієнти розділені пробілами'
          },
        text: {
                label: 'Рецепт',
                multiline: true,
                onChange: (event) => {
                    this.setState({
                      height: event.nativeEvent.contentSize.height
                    });
                  },
          stylesheet: {
            ...Form.stylesheet,
            textbox: {
              ...Form.stylesheet.textbox,
              normal: {
                ...Form.stylesheet.textbox.normal,
                height: 100
              },
              error: {
                ...Form.stylesheet.textbox.error,
                height: 100
            }
          }
        }
            },
        isBreakfast: {
                label: 'Сніданок?'
            },
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
            <Image source={require('../../pictures/default.png')} style={styles.thumb}/>

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
