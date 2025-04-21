import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function LessonDetailScreen({ route }) {
  const { lesson } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.description}>{lesson.description}</Text>
      <Text style={styles.code}>{lesson.code}</Text>
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
    color: '#bbbbbb',
  },
  code: {
    fontFamily: 'monospace',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    borderWidth: 2,
    borderColor: '#fb2576',
  },
});
