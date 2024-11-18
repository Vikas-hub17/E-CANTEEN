import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BrowseMenuScreen from '../screens/Student/BrowseMenuScreen';
import OrdersHistoryScreen from '../screens/Student/OrdersHistoryScreen'; // Corrected the import to match the name

// Define navigation parameters for the stack
type StudentStackParamList = {
  BrowseMenu: undefined;
  OrderTracking: undefined;
};

// Create a stack navigator with proper typing
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
        component={OrdersHistoryScreen} // Corrected the component name
        options={{ title: 'Track Your Order' }}
      />
    </Stack.Navigator>
  );
};

export default StudentStack;
