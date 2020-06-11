import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoidmVsZXpkb3Rjb20iLCJhIjoiY2thY3VsbHoyMDh2azJxbXhsamYycmZkbSJ9.gzPvGyEy5EQ5AFeS_nEQHQ',
);

function HomeScreen ({navigation}) {
    return (
      <SafeAreaView style={styles.page}>
        <View style={styles.map}>
          <MapboxGL.MapView
            style={styles.map}
            zoomLevel={14}
            centerCoordinate={[-48.783864, -28.490092]}>
            <MapboxGL.Camera
              zoomLevel={12}
              centerCoordinate={[-48.783864, -28.490092]}
            />
          </MapboxGL.MapView>
        </View>
        <TouchableOpacity
          style={styles.openMenu}
          onPress={navigation.openDrawer}
        />
        <View style={styles.container}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.where}> Para Onde?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <View style={styles.location}>
              <View style={styles.locations} />
              <Text>Casa da namorada</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <View style={styles.location}>
              <View style={styles.locations} />
              <Text>Rodoviaria</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottom}>
            <View style={styles.bottom} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    height: 500,
    width: 410,
    position: 'absolute',
  },
  container: {
    // marginBottom: 100,
    marginTop: 500,
    backgroundColor: '#F5FCFF',
  },
  where: {
    backgroundColor: '#CBCFD2',
    fontSize: 30,
    width: 350,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  locations: {
    backgroundColor: '#CBCFD2',
    borderRadius: 50,
    width: 50,
    height: 50,
    marginTop: 20,
  },
  location: {
    flexDirection: 'row',
  },
  textLocation: {
    marginTop: 20,
  },
  bottom: {
    backgroundColor: '#3F527C',
    borderRadius: 20,
    width: 300,
    height: 30,
    marginTop: 60,
    marginLeft: 30,
  },
  openMenu: {
    backgroundColor: '#162E4A',
    borderRadius: 20,
    width: 50,
    height: 50,
    marginTop: 10,
    marginRight: 300,
  },
});


export default HomeScreen;