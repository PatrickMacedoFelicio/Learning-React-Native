import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

export default function LessonDetailScreen({ route }) {
  const { lesson } = route.params;

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.description}>{lesson.description}</Text>
        <Text style={styles.code}>{lesson.code}</Text>
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