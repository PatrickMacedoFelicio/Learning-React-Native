import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function ExercisePreviewCard({ exercise, navigation }) {
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('ExerciseDetail', { exercise })}
    >
      <Text style={styles.title}>{exercise.title}</Text>
      <Text style={styles.description}>{exercise.description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fb2576',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },
  description: {
    fontSize: 14,
    color: '#ffffff',
  },
});