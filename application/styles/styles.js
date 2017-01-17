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
        padding: 10
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
        marginBottom: 0,
        borderRadius: 0
    },

    Recipe: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff'
    },

    txt: {
        fontSize: 24,
        marginLeft: 5,
        marginTop: 2,
        color: '#222222'
    },

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
