import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../../../contexts/AppContext';

const CartScreen = ({ navigation }: any) => {
  const { liveOrders, setLiveOrders, setPastOrders } = useContext(AppContext);

  const placeOrder = () => {
    setPastOrders((prev) => [...prev, ...liveOrders]);
    setLiveOrders([]);
    navigation.navigate('OrderTracking');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={liveOrders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - ₹{item.price}</Text>
          </View>
        )}
      />
      <Button title="Place Order" onPress={placeOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { padding: 10, marginBottom: 8, borderWidth: 1, borderRadius: 4 },
});

export default CartScreen;
