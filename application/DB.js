/**
 * @flow
 */
'use strict';
import RNDBModel from 'react-native-db-models';

var DB = {
    "recipes": new RNDBModel.create_db('recipes')
}

module.exports = DB
