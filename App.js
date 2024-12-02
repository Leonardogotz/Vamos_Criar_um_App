import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AddSupplier from './components/AddSupplier';
import SupplierList from './components/SupplierList';

export default function App() {
  const [suppliers, setSuppliers] = useState([]);

  const addSupplier = (supplier) => {
    setSuppliers((prevSuppliers) => [...prevSuppliers, supplier]);
  };

  return (
    <View style={styles.container}>
      <AddSupplier onAddSupplier={addSupplier} />
      <SupplierList suppliers={suppliers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
});
