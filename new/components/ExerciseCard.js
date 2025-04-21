import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ExerciseCard({ exercise }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{exercise.title}</Text>
      <Text style={styles.description}>{exercise.description}</Text>
      <Text style={styles.code}>{exercise.code}</Text>

      <TouchableOpacity onPress={() => setShowAnswer(true)} style={styles.button}>
        <Text style={styles.buttonText}>Ver Resposta</Text>
      </TouchableOpacity>

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
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ffffff',
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: '#cccccc',
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#2c2c2c',
    color: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f13678',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  answerBox: {
    marginTop: 15,
    backgroundColor: '#292929',
    padding: 10,
    borderRadius: 8,
    borderColor: '#f13678',
    borderWidth: 1,
  },
  answerTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#f13678',
  },
});
