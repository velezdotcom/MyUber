import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ProfileScreen ({navigation}) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.openMenu}
          onPress={navigation.openDrawer}
        />

        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 50}}>Profile screen</Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  openMenu: {
    backgroundColor: '#162E4A',
    borderRadius: 20,
    width: 50,
    height: 50,
    marginTop: 10,
    marginRight: 300,
  },
});

export default ProfileScreen;