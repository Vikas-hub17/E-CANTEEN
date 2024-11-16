import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BrowseMenuScreen from '../screens/Student/BrowseMenuScreen';
import OrderTrackingScreen from '../screens/Student/OrderTrackingScreen';

const Stack = createNativeStackNavigator();

const StudentStack = () => {
  return (
    <Stack.Navigator initialRouteName="BrowseMenu">
      <Stack.Screen name="BrowseMenu" component={BrowseMenuScreen} />
      <Stack.Screen name="OrderTracking" component={OrderTrackingScreen} />
    </Stack.Navigator>
  );
};

export default StudentStack;
