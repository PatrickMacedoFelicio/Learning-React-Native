import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ExerciseCard({ exercise }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{exercise.title}</Text>
      <Text style={styles.description}>{exercise.description}</Text>
      <Text style={styles.code}>{exercise.code}</Text>
      <Button title="Ver Resposta" onPress={() => setShowAnswer(true)} />
      {showAnswer && (
        <View style={styles.answerBox}>
          <Text style={styles.answerTitle}>Resposta:</Text>
          <Text style={styles.code}>{exercise.answer}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  answerBox: {
    marginTop: 10,
    backgroundColor: '#d1ffd6',
    padding: 10,
    borderRadius: 8,
  },
  answerTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
