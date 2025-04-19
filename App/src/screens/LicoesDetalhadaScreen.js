import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function LessonDetailScreen({ route }) {
  const { lesson } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.theory}>{lesson.theory}</Text>
      <Text style={styles.code}>{lesson.code}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  theory: {
    fontSize: 16,
    marginBottom: 20,
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 6,
  },
});