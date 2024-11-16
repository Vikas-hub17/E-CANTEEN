import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const MenuManagementScreen = () => {
  const [menu, setMenu] = useState([
    { id: '1', name: 'Burger', price: 50 },
    { id: '2', name: 'Pizza', price: 100 },
    { id: '3', name: 'Pasta', price: 80 },
  ]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const addMenuItem = () => {
    if (!newItem.name || !newItem.price) return;
    setMenu((prev) => [
      ...prev,
      { id: (prev.length + 1).toString(), name: newItem.name, price: parseInt(newItem.price) },
    ]);
    setNewItem({ name: '', price: '' });
  };

  const deleteMenuItem = (id: string) => {
    setMenu((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Management</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={newItem.name}
        onChangeText={(text) => setNewItem({ ...newItem, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Item Price"
        keyboardType="numeric"
        value={newItem.price}
        onChangeText={(text) => setNewItem({ ...newItem, price: text })}
      />
      <Button title="Add Item" onPress={addMenuItem} />

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ₹{item.price}</Text>
            <Button title="Delete" onPress={() => deleteMenuItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, borderRadius: 4, marginBottom: 8, padding: 8 },
  item: { padding: 10, marginBottom: 8, borderWidth: 1, borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between' },
});

export default MenuManagementScreen;
