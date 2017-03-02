/**
 * @flow
 */
'use strict';

import styles from './application/styles/styles';
import RecipeListContainer from './application/components/RecipeListContainer';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Text,
    View,
    BackAndroid,
    Navigator
} from 'react-native';

var NavigationBarRouteMapper = {

    LeftButton: function(route, navigator, index, navState) {
        if (index === 0) {
            // return null;
            return (
                <Text style={[styles.navBarText, styles.navBarButtonText, styles.navBarLeftButton]}>
                    Menu
                </Text>

            );
        }

        var previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity onPress={() => navigator.pop()} style={styles.navBarLeftButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    Back
                </Text>
            </TouchableOpacity>
        );
    },

    RightButton: function(route, navigator, index, navState) {
        return //(
        // <TouchableOpacity onPress={() => navigator.push(newRandomRoute())} style={styles.navBarRightButton}>
        //     <Text style={[styles.navBarText, styles.navBarButtonText]}>
        //         Next
        //     </Text>
        // </TouchableOpacity>
        //);
    },

    Title: function(route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.title}
            </Text>

        );
    }
};

export default class menuGenerator extends Component {

    constructor(props) {
        super(props);
        this.navigator;
    }

    componentWillMount() {
        console.log('component mounted');
        BackAndroid.addEventListener('hardwareBackPress', () => {
            console.log('hardwareBackPress');
            if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
                this.navigator.pop();
                return true;
            }
            return false;
        });
    }

    renderScene(route, navigator) {
        this.navigator = navigator;
        return (<route.component title={route.title} navigator={navigator} {...route.passProps}/>)
    }

    render() {
        return (
            <Navigator initialRoute={{
                title: 'Recipe List',
                component: RecipeListContainer,
                index: 0
            }} renderScene={this.renderScene.bind(this)} navigationBar={< Navigator.NavigationBar routeMapper = {
                NavigationBarRouteMapper
            }
            style = {
                styles.navBar
            } />}/>
        );
    }
}

AppRegistry.registerComponent('menuGenerator', () => menuGenerator);

// this is just an example of Navigator, NavigatorBar and hardwareBackPress
// import {
//   BackAndroid,
//   Navigator,
// } from 'react-native';
//
// import SceneContainer from './Navigation/SceneContainer';
// import RouteMapper from './Navigation/RouteMapper';
//
// export default class AppContainer extends Component {
//
//   constructor(props) {
//     super(props);
//
//     this.navigator;
//   }
//
//   componentWillMount() {
//     BackAndroid.addEventListener('hardwareBackPress', () => {
//       if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
//         this.navigator.pop();
//         return true;
//       }
//       return false;
//     });
//   }
//
//   renderScene(route, navigator) {
//     this.navigator = navigator;
//
//     return (
//       <SceneContainer
//         title={route.title}
//         route={route}
//         navigator={navigator}
//         onBack={() => {
//           if (route.index > 0) {
//             navigator.pop();
//           }
//         }}
//         {...this.props} />
//     );
//   }
//
//   render() {
//     return (
//       <Navigator
//         initialRoute={<View />}
//         renderScene={this.renderScene.bind(this)}
//         navigationBar={
//           <Navigator.NavigationBar
//             style={{backgroundColor: 'gray'}}
//             routeMapper={RouteMapper} />
//         } />
//     );
//   }
// };
