import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function LessonDetailScreen({ route }) {
  const { lesson } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.description}>{lesson.description}</Text>
      <Text style={styles.description}>{lesson.more_description}</Text>
      <Text style={styles.code}>{lesson.code}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
});