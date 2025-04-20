import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Mini Tutorial de React Native</Text>
      <Text style={styles.text}>Este app ajudará você a aprender os conceitos básicos de React Native de forma simples e interativa.</Text>
      <Button title="Começar" onPress={() => navigation.navigate('Selection')} color="#1e90ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#bbbbbb',
    textAlign: 'center',
    marginBottom: 20,
  },
});
