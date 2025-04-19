import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function SelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma opção:</Text>
      <Button title="Aprender Conceitos Básicos" onPress={() => navigation.navigate('Lessons')} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Exercícios Práticos" onPress={() => navigation.navigate('Exercises')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
});