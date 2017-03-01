'use strict';
var React = require('react-native');
var {StyleSheet} = React;

var styles = StyleSheet.create({

    navigator: {
        flex: 1
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#ffffff'
    },

    rowContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#ffffff'
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },

    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

    saveButton: {
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8
    },

    newButton: {
        // marginBottom: 0,
        position: 'absolute',
        right: 4,
        bottom: 4,
        borderRadius: 28,
        height: 48,
        width: 48,
        backgroundColor: '#48BBEC',
        // alignSelf: 'flex-end',
        justifyContent: 'center'
    },

    Recipe: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff'
    },

    title: {
        fontSize: 24,
        color: '#222222'
    },

    ingridients: {},

    completed: {
        color: '#cccccc'
    },

    hr: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 1,
        marginLeft: 0,
        marginRight: 0
    },

    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
    }

});

module.exports = styles;
