import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, Button, StyleSheet } from 'react-native';
import { MenuItem, menuItems } from '../../../data/mockData';

const MenuManagementScreen: React.FC = () => {
  const [menu, setMenu] = useState<MenuItem[]>(menuItems);
  const [newItem, setNewItem] = useState<{ name: string; price: string }>({ name: '', price: '' });

  const handleAddItem = () => {
    if (newItem.name && newItem.price) {
      const newMenuItem: MenuItem = { id: Date.now(), name: newItem.name, price: parseFloat(newItem.price) };
      setMenu([...menu, newMenuItem]);
      setNewItem({ name: '', price: '' });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ₹{item.price}</Text>
          </View>
        )}
      />
      <TextInput
        placeholder="Item Name"
        value={newItem.name}
        onChangeText={(text) => setNewItem({ ...newItem, name: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={newItem.price}
        keyboardType="numeric"
        onChangeText={(text) => setNewItem({ ...newItem, price: text })}
        style={styles.input}
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  item: { padding: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  input: { marginBottom: 8, borderWidth: 1, borderColor: '#ccc', padding: 8 },
});

export default MenuManagementScreen;
