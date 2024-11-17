import React, { useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import { Order, orders } from '../../../data/mockData';

const OrderManagementScreen: React.FC = () => {
  const [orderList, setOrderList] = useState<Order[]>(orders);

  const handleUpdateStatus = (orderId: number, newStatus: Order['status']) => {
    setOrderList(
      orderList.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order))
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orderList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.order}>
            <Text>{item.student}</Text>
            <Text>{item.items.map((i) => `${i.name} x${i.quantity}`).join(', ')}</Text>
            <Text>Status: {item.status}</Text>
            <View style={styles.buttons}>
              <Button title="Received" onPress={() => handleUpdateStatus(item.id, 'Received')} />
              <Button title="Picked" onPress={() => handleUpdateStatus(item.id, 'Picked')} />
              <Button title="Prepared" onPress={() => handleUpdateStatus(item.id, 'Prepared')} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  order: { padding: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  buttons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 },
});

export default OrderManagementScreen;
