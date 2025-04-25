import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

export default function ExerciseDetailScreen({ route }) {
  const { exercise } = route.params;
  const [showSolution, setShowSolution] = useState(false);

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{exercise.title}</Text>
        <Text style={styles.description}>{exercise.description}</Text>

        <Text style={styles.sectionTitle}>Código com erro:</Text>
        <View style={styles.codeBox}>
          <Text style={styles.code}>{exercise.code}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => setShowSolution(!showSolution)}>
          <Text style={styles.buttonText}>
            {showSolution ? 'Ocultar Solução' : 'Mostrar Solução'}
          </Text>
        </TouchableOpacity>

        {showSolution && (
          <View style={styles.solutionBox}>
            <Text style={styles.sectionTitle}>Correção:</Text>
            <Text style={styles.code}>{exercise.answer}</Text>
          </View>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#bbbbbb',
  },
  sectionTitle: {
    color: '#f13678',
    fontWeight: 'bold',
    marginBottom: 6,
  },
  codeBox: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#1e1e1e',
    borderWidth: 2,
    borderColor: '#f13678',
    marginBottom: 15,
  },
  code: {
    fontFamily: 'monospace',
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#f13678',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  solutionBox: {
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#444',
    padding: 10,
    borderRadius: 8,
  },
});
