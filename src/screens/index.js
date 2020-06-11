import React from 'react';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

export const Home = ({navigation}) => (
  <HomeScreen navigation={navigation} name="Home" />
);
export const Profile = ({navigation}) => (
  <ProfileScreen navigation={navigation} name="Profile" />
);
export const Settings = ({navigation}) => (
  <SettingsScreen navigation={navigation} name="Settings" />
);

