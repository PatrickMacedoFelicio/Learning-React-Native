import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

export default function ExerciseDetailScreen({ route }) {
  const { exercise } = route.params;
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{exercise.title}</Text>
      <Text style={styles.description}>{exercise.description}</Text>
      <Text style={styles.description}>{exercise.teste}</Text>
      <Text style={styles.code}>{exercise.code}</Text>
      <Button title="Ver Resposta" onPress={() => setShowAnswer(true)} color="#fb2576"/>
      {showAnswer && (
        <View style={styles.answerBox}>
          <Text style={styles.answerTitle}>Resposta:</Text>
          <Text style={styles.code}>{exercise.answer}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#dddddd',
  },
  code: {
    fontFamily: 'monospace',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    borderWidth: 2,
    borderColor: '#fb2576',
    marginTop: 5,
    marginBottom: 15,
  },
  answerBox: {
    marginTop: 15,
    backgroundColor: '#fb2576',
    padding: 10,
    borderRadius: 8,
  },
  answerTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
    fontSize: 16,
  },
});

