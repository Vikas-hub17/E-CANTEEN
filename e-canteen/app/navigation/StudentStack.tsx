import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BrowseMenuScreen from '../screens/Student/BrowseMenuScreen';
import OrdersHistoryScreen from '../screens/Student/OrdersHistoryScreen';

// Define navigation parameters
type StudentStackParamList = {
  BrowseMenu: undefined;
  OrderTracking: undefined;
};

const Stack = createStackNavigator<StudentStackParamList>();

const StudentStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="BrowseMenu">
      <Stack.Screen
        name="BrowseMenu"
        component={BrowseMenuScreen}
        options={{ title: 'Browse Menu' }}
      />
      <Stack.Screen
        name="OrderTracking"
        component={OrdersHistoryScreen}
        options={{ title: 'Track Your Order' }}
      />
    </Stack.Navigator>
  );
};

export default StudentStack;
