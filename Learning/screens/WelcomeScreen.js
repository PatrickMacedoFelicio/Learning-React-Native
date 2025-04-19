import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini Tutorial React Native</Text>
      <Text style={styles.text}>Aprenda os conceitos básicos ou pratique com exercícios simples.</Text>
      <Button title="Começar" onPress={() => navigation.navigate('Selection')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 20 },
});