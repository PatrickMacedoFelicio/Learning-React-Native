import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

export default function WelcomeScreen({ navigation }) {
  return (
    <ScreenWrapper>
      <Text style={styles.title}>Bem-vindo ao App!</Text>
      <Text style={styles.subtitle}>Escolha uma opção abaixo:</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Lessons')}
        >
          <Text style={styles.buttonText}>Acessar Lições</Text>
        </TouchableOpacity>

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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 20,
  },
  buttonsContainer: {
    gap: 15,
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
