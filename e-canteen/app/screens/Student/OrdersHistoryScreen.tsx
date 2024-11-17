import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../../../contexts/AppContext';

const OrderTrackingScreen = () => {
  const { liveOrders, pastOrders } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Orders</Text>
      <FlatList
        data={liveOrders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <Text style={styles.title}>Past Orders</Text>
      <FlatList
        data={pastOrders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { padding: 10, marginBottom: 8, borderWidth: 1, borderRadius: 4 },
});

export default OrderTrackingScreen;
