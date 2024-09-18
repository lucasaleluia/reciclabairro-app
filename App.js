import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [material, setMaterial] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [materiais, setMateriais] = useState([]);

  // Função para adicionar um novo item de material reciclado
  const adicionarMaterial = () => {
    if (material !== '' && quantidade !== '') {
      setMateriais([
        ...materiais, 
        { id: Date.now().toString(), material, quantidade: parseInt(quantidade) }
      ]);
      setMaterial('');
      setQuantidade('');
    }
  };

  // Função para renderizar cada item da lista de materiais
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.material}: {item.quantidade} kg</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Materiais Recicláveis</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Material (Papel, Plástico, etc.)"
        value={material}
        onChangeText={setMaterial}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Quantidade em kg"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      
      <Button title="Adicionar Material" onPress={adicionarMaterial} />

      <FlatList
        data={materiais}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  item: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
  },
});
