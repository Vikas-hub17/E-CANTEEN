import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const mockMenu = [
  { id: '1', name: 'Pizza', price: '$10' },
  { id: '2', name: 'Burger', price: '$5' },
  { id: '3', name: 'Pasta', price: '$8' },
];

export default function BrowseMenuScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Text style={styles.menuText}>{item.name} - {item.price}</Text>
      <TouchableOpacity
        style={styles.orderButton}
        onPress={() => alert(`Ordered: ${item.name}`)}
      >
        <Text style={styles.orderButtonText}>Order</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockMenu}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={styles.trackButton}
        onPress={() => navigation.navigate('OrderTracking')}
      >
        <Text style={styles.trackButtonText}>Track Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  menuText: {
    fontSize: 18,
  },
  orderButton: {
    backgroundColor: '#007BFF',
    padding: 8,
    borderRadius: 4,
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  trackButton: {
    backgroundColor: '#28A745',
    padding: 16,
    marginTop: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
