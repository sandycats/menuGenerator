/**
 * @flow
 */
'use strict';
import Realm from 'realm';
import React, {Component} from 'react';

// const RecipesSchema = {
//     name: 'Recipes',
//     primaryKey: 'id',
//     properties: {
//         id: 'int', // primary key
//         isBreakfast: 'bool',
//         title: {
//             type: 'string',
//             indexed: true
//         },
//         image: {type: 'string', optional: true}
//         ingridients: {type: 'string', optional: true}
//         text: {type: 'string', optional: true}
//     }
// }

// Initialize a Realm with Recipe model update with new schemaVersion
//  let realm = new Realm({schema: [RecipeSchema], schemaVersion: 3});

//write elements in db
// realm.write(() => {
//     realm.create('Recipes', {
//         id: 1,
//         isBreakfast: false,
//         title: 'Каша',
//         image: './pictures/default.png',
//         ingridients: 'крупа вода сіль',
//         text: 'крупу  покласти у воду, додати сіль, поставити на середній вогонь, варити до готовності'
//     });
//     realm.create('Recipes', {
//         id: 2,
//         isBreakfast: false,
//         title: 'Млинці',
//         image: './pictures/default.png',
//         ingridients: 'борошно молоко сіль яйця цукор',
//         text: 'змішати всі інгридієнти. сковорідкурозігріти і на неї викладати ложкою тісто'
//     });
//     realm.create('Recipes', {
//         id: 3,
//         isBreakfast: false,
//         title: 'омлет',
//         image: './pictures/default.png',
//         ingridients: 'борошно молоко сіль яйця цукор',
//         text: 'яйця взбити, додати сіль, молоко, трохи борошна і на сковорідку'
//     });
// })

//adb reverse tcp:8081 tcp:8081
//react - native start
//adb logcat *:S ReactNative:V ReactNativeJS:V
