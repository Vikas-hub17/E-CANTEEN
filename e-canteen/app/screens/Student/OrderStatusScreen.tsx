import React, { useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppContext } from '../../../contexts/AppContext';

// Define the types for a menu item
type MenuItem = {
  id: string;
  name: string;
  price: number;
};

// Define the types for the AppContext
type AppContextType = {
  liveOrders: MenuItem[];
  setLiveOrders: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

// Define navigation stack parameters
type RootStackParamList = {
  Menu: undefined;
  Cart: undefined;
};

// Define the props type for the MenuScreen
type MenuScreenProps = NativeStackScreenProps<RootStackParamList, 'Menu'>;

const MenuScreen: React.FC<MenuScreenProps> = ({ navigation }) => {
  const [menu, setMenu] = useState<MenuItem[]>([
    { id: '1', name: 'Burger', price: 50 },
    { id: '2', name: 'Pizza', price: 100 },
    { id: '3', name: 'Pasta', price: 80 },
  ]);

  const { setLiveOrders } = useContext(AppContext) as AppContextType;

  const addToCart = (item: MenuItem) => {
    setLiveOrders((prev) => [...prev, item]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              {item.name} - ₹{item.price}
            </Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
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
    borderColor: '#ccc',
  },
});

export default MenuScreen;
