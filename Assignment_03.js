import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Location from 'expo-location'; // Expo's built-in location module

const Tab = createBottomTabNavigator();

// Home Screen: Shows user's city
function HomeScreen() {
  const [city, setCity] = useState('Loading...');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setCity('Permission denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      
      // Reverse geocoding to get city name
      let geocode = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (geocode[0]?.city) {
        setCity(geocode[0].city);
      } else {
        setCity('Unknown location');
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your current city is:</Text>
      <Text style={styles.cityText}>{city}</Text>
    </View>
  );
}

// Profile Screen: Editable name (updates title)
function ProfileScreen({ navigation }) {
  const [name, setName] = useState('User');

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, [name]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
    </View>
  );
}

// Settings Screen: Placeholder
function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

// Main App
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  cityText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});