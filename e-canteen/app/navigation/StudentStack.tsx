import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BrowseMenuScreen from '../screens/Student/BrowseMenuScreen';
import OrderTrackingScreen from '../screens/Student/OrderTrackingScreen';

const Stack = createStackNavigator();

export default function StudentStack() {
  return (
    <Stack.Navigator initialRouteName="BrowseMenu">
      <Stack.Screen
        name="BrowseMenu"
        component={BrowseMenuScreen}
        options={{ title: 'Browse Menu' }}
      />
      <Stack.Screen
        name="OrderTracking"
        component={OrderTrackingScreen}
        options={{ title: 'Track Your Order' }}
      />
    </Stack.Navigator>
  );
}
