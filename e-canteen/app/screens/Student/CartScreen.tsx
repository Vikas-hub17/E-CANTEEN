import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppContext } from '../../../contexts/AppContext';

// Define the types for an order
type Order = {
  name: string;
  price: number;
};

// Define the types for the AppContext
type AppContextType = {
  liveOrders: Order[];
  setLiveOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  pastOrders: Order[];
  setPastOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

// Extend the navigation prop type
type RootStackParamList = {
  Cart: undefined;
  OrderTracking: undefined;
};

type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'Cart'>;

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const { liveOrders, setLiveOrders, setPastOrders } = useContext(
    AppContext
  ) as AppContextType;

  const placeOrder = () => {
    // Move live orders to past orders
    setPastOrders((prev) => [...prev, ...liveOrders]);
    setLiveOrders([]);
    // Navigate to the OrderTracking screen
    navigation.navigate('OrderTracking');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {liveOrders.length > 0 ? (
        <FlatList
          data={liveOrders}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>
                {item.name} - ₹{item.price}
              </Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      )}
      <Button
        title="Place Order"
        onPress={placeOrder}
        disabled={liveOrders.length === 0}
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
    borderColor: '#ccc',
  },
  emptyCartText: { fontSize: 16, fontStyle: 'italic', color: '#666' },
});

export default CartScreen;
