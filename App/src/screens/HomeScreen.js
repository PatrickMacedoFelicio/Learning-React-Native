import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Mini Tutorial de React Native!</Text>
      <Text style={styles.text}>Aqui você aprenderá os conceitos básicos de forma simples e prática.</Text>
      <Button title="Começar" onPress={() => navigation.navigate('Licoes')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
});