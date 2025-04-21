import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

export default function WelcomeScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <Text style={styles.title}>Mini Tutorial de React Native</Text>

      <Text style={styles.h2}>📒 Área de aprendizagem</Text>
      <Text style={styles.subtitle}>Aprenda alguns dos conceitos mais utilizados em React Native!</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Lessons')}
        >
          <Text style={styles.buttonText}>Acessar Lições</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.h2}>🧠 Teste seu conhecimento</Text>
      <Text style={styles.subtitle}>Esoolha alguns cards e teste seu conhecimento adiquirido resolvendo alguns desafios de códigos.</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Exercises')}
        >
          <Text style={styles.buttonText}>Ver Exercícios</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 20,
    textAlign: 'justify'
  },
  h2: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    gap: 15,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#f13678',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
