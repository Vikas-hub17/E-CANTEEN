import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './contexts/AppContext';
import MenuScreen from './app/screens/Student/MenuScreen';
import CartScreen from './app/screens/Student/CartScreen';
import OrderTrackingScreen from './app/screens/Student/OrderTrackingScreen';
import MenuManagementScreen from './app/screens/Admin/MenuManagementScreen';
import OrderManagementScreen from './app/screens/Admin/OrderManagementScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="OrderTracking" component={OrderTrackingScreen} />
          <Stack.Screen name="MenuManagement" component={MenuManagementScreen} />
          <Stack.Screen name="OrderManagement" component={OrderManagementScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
