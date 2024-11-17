import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuManagementScreen from '../app/screens/Admin/MenuManagementScreen';
import OrderManagementScreen from '../app/screens/Admin/OrderManagementScreen';
import BrowseMenuScreen from '../app/screens/Student/BrowseMenuScreen';
import CartScreen from '../app/screens/Student/CartScreen';
import OrderStatusScreen from '../screens/Student/OrderStatusScreen';
import OrdersHistoryScreen from '../screens/Student/OrdersHistoryScreen';
import { Ionicons } from '@expo/vector-icons';

type TabParamList = {
  MenuManagement: undefined;
  OrderManagement: undefined;
  BrowseMenu: undefined;
  Cart: undefined;
  OrderStatus: undefined;
  OrdersHistory: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="MenuManagement"
        component={MenuManagementScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="md-menu" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="OrderManagement"
        component={OrderManagementScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="md-receipt" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="BrowseMenu"
        component={BrowseMenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="md-search" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="md-cart" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="OrderStatus"
        component={OrderStatusScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="md-time" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="OrdersHistory"
        component={OrdersHistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="md-list" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
