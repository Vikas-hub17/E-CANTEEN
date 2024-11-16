import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuManagementScreen from '../screens/Admin/MenuManagementScreen';
import OrderManagementScreen from '../screens/Admin/OrderManagementScreen';

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator initialRouteName="MenuManagement">
      <Stack.Screen name="MenuManagement" component={MenuManagementScreen} />
      <Stack.Screen name="OrderManagement" component={OrderManagementScreen} />
    </Stack.Navigator>
  );
};

export default AdminStack;
