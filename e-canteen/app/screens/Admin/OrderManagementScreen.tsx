import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const OrderManagementScreen = () => {
  const [orders, setOrders] = useState([
    { id: '1', name: 'Burger', status: 'Received' },
    { id: '2', name: 'Pizza', status: 'Picked' },
    { id: '3', name: 'Pasta', status: 'Prepared' },
  ]);

  const updateOrderStatus = (id: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === id ? { ...order, status: newStatus } : order))
    );
  };

  const nextStatus = (status: string) => {
    switch (status) {
      case 'Received':
        return 'Picked';
      case 'Picked':
        return 'Prepared';
      case 'Prepared':
        return 'Completed';
      default:
        return status;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Management</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text>{item.name}</Text>
              <Text>Status: {item.status}</Text>
            </View>
            {item.status !== 'Completed' && (
              <Button
                title={`Move to ${nextStatus(item.status)}`}
                onPress={() => updateOrderStatus(item.id, nextStatus(item.status))}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: {
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default OrderManagementScreen;
