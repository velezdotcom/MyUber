import React, {Component} from 'react';
// import {View, StyleSheet, Button, Image} from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Home, Profile, Settings} from './src/screens';

const MyDrawerNavigator = createDrawerNavigator({
  Home,
  Profile,
  Settings,
});

export default createAppContainer(MyDrawerNavigator);
