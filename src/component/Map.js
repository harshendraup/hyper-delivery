import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Define default region for the map (latitude, longitude, and zoom level)
const DEFAULT_REGION = {
  latitude: 37.78825,  // Default latitude
  longitude: -122.4324,  // Default longitude
  latitudeDelta: 0.0922,  // Zoom level (latitude)
  longitudeDelta: 0.0421,  // Zoom level (longitude)
};

// The MapComponent receives props for custom markers or region
const MapComponent = ({ region = DEFAULT_REGION, markers = [] }) => {
  const [mapRegion, setMapRegion] = useState(region);

  useEffect(() => {
    if (region) {
      setMapRegion(region);  // Update map region if the parent passes a new region
    }
  }, [region]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={mapRegion}  // Sets initial region
        region={mapRegion}  // This controls the map's region programmatically
        onRegionChangeComplete={(newRegion) => setMapRegion(newRegion)} // Optional: Track map movement
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapComponent;
