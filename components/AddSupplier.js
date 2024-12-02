import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
} from 'react-native';

const AddSupplier = ({ onAddSupplier }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleAddSupplier = () => {
    if (name && category) {
      onAddSupplier({ name, category, image: image || null });
      setName('');
      setCategory('');
      setImage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Fornecedor</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Fornecedor"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Categoria"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="URL da Imagem (opcional)"
        value={image}
        onChangeText={setImage}
      />
      <Button title="Adicionar" onPress={handleAddSupplier} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default AddSupplier;
