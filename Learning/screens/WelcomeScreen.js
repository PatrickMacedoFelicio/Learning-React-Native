// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Mini Tutorial" />

      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo ao Mini Tutorial de React Native</Text>
        <Text style={styles.description}>
          Este app ajudará você a aprender os conceitos básicos de React Native de forma simples e interativa.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Selection')}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    paddingTop: 80,
    flex: 1,
    padding: 20,

  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#dddddd',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f13678',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignSelf: 'center',
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
