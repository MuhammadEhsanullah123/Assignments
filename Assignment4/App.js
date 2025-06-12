
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApiProvider } from './ApiContext';
import { SensorProvider } from './SensorContext';
import ApiScreen from './ApiScreen';
import SensorScreen from './SensorScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ApiProvider>
      <SensorProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="API Demo" component={ApiScreen} />
            <Tab.Screen name="Sensor Data" component={SensorScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SensorProvider>
    </ApiProvider>
  );
}
